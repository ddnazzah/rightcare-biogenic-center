/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-19 00:14:08
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-21 02:22:48
 */

export const size = {
	smallDevices: '567px',
	mediumDevices: '768px',
	largeDevices: '992px',
	extraLargeDevices: '1200px',
};

export const device = {
	smallDevices: `@media (min-width: ${size.smallDevices})`,
	mediumDevices: `@media (min-width: ${size.mediumDevices})`,
	largeDevices: `@media (min-width: ${size.largeDevices})`,
	extraLargeDevices: `@media (min-width: ${size.extraLargeDevices})`,
};
