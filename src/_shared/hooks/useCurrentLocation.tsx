import { logPretty } from 'Profile/utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
    Alert,
    Linking,
    PermissionsAndroid,
    Platform,
    ToastAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import RNGooglePlaces, { LatLng } from 'react-native-google-places';
import { IUser } from '../types';
import { useAuth } from './useAuth';

const hasPermissionIOS = async () => {
    const openSetting = () => {
        Linking.openSettings().catch(() => {
            Alert.alert('Unable to open settings');
        });
    };

    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
        return true;
    }

    if (status === 'disabled') {
        Alert.alert(
            'Turn on Location Services to allow "MyShabo" to determine your location.',
            '',
            [
                { text: 'Go to Settings', onPress: openSetting },
                { text: "Don't Use Location", onPress: () => {} },
            ],
        );
    }

    return false;
};

const hasLocationPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'ios') {
        const hasPermission = await hasPermissionIOS();
        return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
        return true;
    }

    const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show(
            'Location permission denied by user.',
            ToastAndroid.LONG,
        );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show(
            'Location permission revoked by user.',
            ToastAndroid.LONG,
        );
    }

    return false;
};

export const useCurrentLocation = (withListener: boolean = false) => {
    const { user, setAuthState } = useAuth();

    const [address, setAddress] = useState(user?.address || '');

    const [location, setLocation] = useState<LatLng>({
        latitude: user?.location?.latitude || 0,
        longitude: user?.location?.longitude || 0,
    });

    const watchId = useRef<number | null>(null);

    const updateLocation = useCallback(
        (position: Geolocation.GeoPosition) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            setAuthState({
                user: {
                    ...(user as IUser),
                    location: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                },
            });
        },
        [setAuthState, user],
    );

    const getCurrentLocation = async () => {
        const hasPermission = await hasLocationPermission();

        if (!hasPermission) {
            return;
        }

        RNGooglePlaces.getCurrentPlace(['address', 'location'])
            .then(place => {
                setAddress(place[0].address);
                setLocation(place[0].location);
                setAuthState({
                    user: {
                        ...(user as IUser),
                        address: place[0].address,
                        location: place[0].location,
                    },
                });
            })
            .catch(_error => {
                if (_error.code === 'E_CURRENT_PLACE_ERROR') {
                    Geolocation.getCurrentPosition(
                        position => {
                            updateLocation(position);
                        },
                        err => {
                            logPretty(err, 'location');
                        },
                        {
                            enableHighAccuracy: true,
                            timeout: 15000,
                            maximumAge: 10000,
                        },
                    );
                } else {
                    logPretty(_error.code, 'location2');
                }
            });
    };

    const getLocationUpdates = async () => {
        const hasPermission = await hasLocationPermission();

        if (!hasPermission) {
            return;
        }

        watchId.current = Geolocation.watchPosition(
            position => {
                updateLocation(position);
            },
            __error => {
                console.log(__error);
            },
            {
                accuracy: {
                    android: 'high',
                    ios: 'best',
                },
                enableHighAccuracy: true,
                distanceFilter: 0,
                interval: 5000,
                fastestInterval: 2000,
                forceRequestLocation: true,
                forceLocationManager: false,
                showLocationDialog: true,
                useSignificantChanges: true,
            },
        );
    };

    const removeLocationUpdates = () => {
        if (watchId.current !== null) {
            Geolocation.clearWatch(watchId.current);
            watchId.current = null;
        }
    };

    // to prevent infinite re-renders
    useEffect(() => {
        if (withListener) {
            getLocationUpdates();
        } else {
            getCurrentLocation();
        }

        return () => {
            removeLocationUpdates();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [withListener]);

    return {
        address,
        location,
        getCurrentLocation,
        hasLocationPermission,
    };
};
