/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-03-20 03:02:21
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-10-19 20:33:19
 */

interface IFlex {
	direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
	align?:
		| 'center'
		| 'end'
		| 'flex-end'
		| 'flex-start'
		| 'self-end'
		| 'self-start'
		| 'start';
	self?:
		| 'center'
		| 'end'
		| 'flex-end'
		| 'flex-start'
		| 'self-end'
		| 'self-start'
		| 'start';
	justify?:
		| 'space-around'
		| 'space-between'
		| 'space-evenly'
		| 'stretch'
		| 'center'
		| 'end'
		| 'flex-end'
		| 'flex-start'
		| 'start';
	flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	flexShrink?: number;
	flex?:
		| 'auto'
		| 'content'
		| 'fit-content'
		| 'max-content'
		| 'min-content'
		| 'none'
		| (string & {})
		| (number & {});
	mx?: string | number;
	my?: string | number;
	mt?: string | number;
	mr?: string | number;
	ml?: string | number;
	mb?: string | number;
	m?: string | number;
	px?: string | number;
	py?: string | number;
	pt?: string | number;
	pr?: string | number;
	pl?: string | number;
	pb?: string | number;
	p?: string | number;
}
