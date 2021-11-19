/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-17 23:25:48
 * @Last Modified by:   Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-17 23:25:48
 */

export const pickAvatarColor = (initial = 'a'): string => {
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	const index = letters.indexOf(initial?.toLowerCase());

	const colors = [
		'#e53935',
		'#d81b60',
		'#8e24aa',
		'#5e35b1',
		'#1e88e5',
		'#43a047',
		'#fb8c00',
		'#f4511e',
		'#6d4c41',
		'#546e7a',
	];

	return colors[index % 10];
};
