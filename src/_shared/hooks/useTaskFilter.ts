import { filterActions } from '../redux/reducerSlice/filterSlice';
import { ITaskFilter } from '../types';
import { useAppDispatch, useAppSelector } from './useTypedRedux';

export const useTaskFilter = () => {
    const dispatch = useAppDispatch();

    const {
        task_name,
        category_id,
        location,
        budget,
        service,
        distance,
        latitude,
        longitude,
    } = useAppSelector(state => state.taskFilter);

    const setFilterState = (payload: Partial<ITaskFilter>) => {
        dispatch(filterActions.setFilterState(payload));
    };

    const resetFilter = () => {
        dispatch(filterActions.reset());
    };

    return {
        task_name,
        category_id,
        location,
        budget,
        service,
        distance,
        latitude,
        longitude,
        resetFilter,
        setFilterState,
    };
};
