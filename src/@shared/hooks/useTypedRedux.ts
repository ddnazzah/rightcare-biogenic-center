/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-03-20 03:53:26
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-06-22 16:15:11
 */

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
