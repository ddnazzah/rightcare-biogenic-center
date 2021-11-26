/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-08-02 16:59:05
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-21 02:26:14
 */

import * as R from 'ramda';

/**
 * this function takes care of undefined and null as part of empty
 * the isEmpty from ramda return false for undefined and null
 * the isNil from ramda returns true for undefined and null
 * the eithr from ramda combines the two function to check for both
 */
export const isReallyEmpty = R.either(R.isNil, R.isEmpty);

export const sortAsc = (key: string, data?: any[]) =>
	R.sort(R.ascend(R.compose(R.prop(key) as any)), data ?? []);

export const truncate = (text: string, size: number) =>
	text.length > size ? `${text.substring(0, size)}...` : text;

export const isLastItem = (array: any[], item: any) => {
	return array.indexOf(item) === array.length - 1;
};
