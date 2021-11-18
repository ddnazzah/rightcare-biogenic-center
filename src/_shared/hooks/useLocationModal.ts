/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-08-15 05:20:47
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-09-16 01:27:36
 */
import { useState } from 'react';
import RNGooglePlaces, { LatLng } from 'react-native-google-places';

export const useLocationModal = () => {
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState<LatLng>({
        latitude: 0,
        longitude: 0,
    });

    const openLocationModal = () => {
        if (!address) {
            setAddress('loading...');
        }

        RNGooglePlaces.openAutocompleteModal(
            {
                useOverlay: true,
                // country: 'gh',
            },
            ['address', 'location'],
        )
            .then(place => {
                if (place.address) {
                    setLocation(place.location);
                    setAddress(place.address);
                }
            })
            .catch(() => {
                if (address === 'loading...') {
                    setAddress('');
                }
            });
    };

    return { openLocationModal, address, location };
};
