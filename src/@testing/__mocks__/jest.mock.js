import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native';
import 'react-native-gesture-handler/jestSetup';

global.__reanimatedWorkletInit = jest.fn();

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {};

    return Reanimated;
});

jest.mock('@react-native-community/push-notification-ios', () => ({
    configure: jest.fn(),
    onRegister: jest.fn(),
    onNotification: jest.fn(),
    createChannel: jest.fn(),
    addEventListener: jest.fn(),
    requestPermissions: jest.fn(() => Promise.resolve()),
    getInitialNotification: jest.fn(() => Promise.resolve()),
    setApplicationIconBadgeNumber: jest.fn(),
}));

jest.mock('react-native-push-notification', () => ({
    configure: jest.fn(),
    onRegister: jest.fn(),
    onNotification: jest.fn(),
    createChannel: jest.fn(),
    addEventListener: jest.fn(),
    requestPermissions: jest.fn(() => Promise.resolve()),
    getInitialNotification: jest.fn(() => Promise.resolve()),
    setApplicationIconBadgeNumber: jest.fn(),
}));

jest.mock('react-native-file-viewer', () => 'FileViewer');

jest.mock('react-native-fs', () => 'RNFS');

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');

    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            dispatch: jest.fn(),
        }),
        useRoute: () => ({
            key: 'string',
            name: 'string',
        }),
    };
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('redux-logger', () => 'logger');

jest.mock('react-native-snackbar', () => {
    return {
        show: jest.fn(),
    };
});

jest.mock('react-native-geolocation-service', () => {
    return {
        getCurrentPosition: jest.fn().mockImplementation(successCallback => {
            const position = {
                coords: {
                    latitude: 57.7,
                    longitude: 11.93,
                },
            };
            successCallback(position);
        }),
    };
});

jest.mock('react-native-woodpicker', () => 'Picker');

jest.mock('react-native-woodpicker', () => 'DefaultDatePicker');

jest.mock('react-native-awesome-alerts', () => 'AwesomeAlert');

jest.mock('react-native-modal', () => 'Modal');

jest.mock('react-native-woodpicker', () => 'DatePicker');

jest.mock('redux-persist', () => {
    const real = jest.requireActual('redux-persist');
    return {
        ...real,
        persistReducer: jest
            .fn()
            .mockImplementation((config, reducers) => reducers),
    };
});

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

jest.mock('react-native-vector-icons/Entypo', () => 'Icon');

jest.mock('react-native-vector-icons/EvilIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Feather', () => 'Icon');

jest.mock('react-native-vector-icons/Foundation', () => 'Icon');

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Octicons', () => 'Icon');

jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'Icon');

jest.mock('react-native-vector-icons/Zocial', () => 'Icon');
