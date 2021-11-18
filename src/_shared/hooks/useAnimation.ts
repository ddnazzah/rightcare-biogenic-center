import { getFocusedRouteNameFromRoute, useRoute } from '@react-navigation/core';
import { useEffect } from 'react';
import {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { Constants } from '../constants';

export const useShowFiltersAnimation = () => {
    const height = useSharedValue(0);

    const route = useRoute();

    const focusedRouteName =
        getFocusedRouteNameFromRoute(route) ?? Constants.routes.POST_A_TASK;

    useEffect(() => {
        (() => {
            if (
                focusedRouteName === Constants.routes.FIND_WORK ||
                focusedRouteName === Constants.routes.WORK_IN_YOUR_AREA
            ) {
                height.value = 34;
            } else {
                height.value = 0;
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [focusedRouteName]);

    const showFiltersStyles = useAnimatedStyle(() => {
        return {
            height: withTiming(height.value, {
                duration: 350,
            }),
        };
    });

    return { showFiltersStyles };
};
