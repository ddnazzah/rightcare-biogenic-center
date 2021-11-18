import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
    getNotifications,
    markNotificationAsRead,
} from '../../Notifications/services/apiServices';
import { INotification } from '../types';

export const useNotifications = () => {
    const [unreadCount, setUnreadCount] = useState<number | undefined>(0);

    const queryClient = useQueryClient();

    const response = useQuery<INotification[]>('notifications', () =>
        getNotifications(),
    );

    const { mutateAsync } = useMutation(
        (notification_ids: INotification['notification_id'][]) =>
            markNotificationAsRead(notification_ids),
        {
            onMutate: async notification_ids => {
                await queryClient.cancelQueries('notifications');

                // Snapshot the previous value
                const previousNotifications =
                    queryClient.getQueryData<INotification[]>('notifications');

                const optimisticNotification = previousNotifications?.map(
                    notification => {
                        if (
                            notification_ids.includes(
                                notification.notification_id,
                            )
                        ) {
                            return { ...notification, status: 'read' };
                        }
                        return notification;
                    },
                );

                if (optimisticNotification) {
                    queryClient.setQueryData('notifications', () => [
                        ...optimisticNotification,
                    ]);
                }
            },
        },
    );

    const markAsRead = async (
        notificaion_ids: INotification['notification_id'][],
    ) => {
        try {
            await mutateAsync(notificaion_ids);
            queryClient.invalidateQueries('notifications');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setUnreadCount(
            response.data?.filter(n => n.status === 'Unread')?.length,
        );

        if (Platform.OS === 'ios') {
            PushNotificationIOS.setApplicationIconBadgeNumber(
                response.data?.filter(n => n.status === 'Unread')
                    ?.length as number,
            );
        }
    }, [response.data]);

    return {
        ...response,
        unreadCount,
        markAsRead,
    };
};
