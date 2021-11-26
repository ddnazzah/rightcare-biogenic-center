/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-19 02:14:04
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-11-26 07:15:30
 */

import bestSelling from '@shared/assets/images/bestSelling.png';
import bg from '@shared/assets/images/bg.png';
import cta from '@shared/assets/images/cta.png';
import { device } from '@shared/utils';
import { BiMapPin } from 'react-icons/bi';
import { IoMdCall } from 'react-icons/io';
import Slider from 'react-slick';
import styled from 'styled-components';

export const Container = styled.div<{ fluid?: boolean; collapse?: boolean }>(
	({ fluid, collapse }) => ({
		paddingTop: collapse ? '0' : '5em',
		paddingBottom: collapse ? '0' : '5em',
		paddingLeft: fluid ? '0' : '10%',
		paddingRight: fluid ? '0' : '10%',
		// [device.mediumDevices]: {
		// 	paddingLeft: fluid ? '0' : '4em',
		// 	paddingRight: fluid ? '0' : '4em',
		// },
		// [device.largeDevices]: {
		// 	paddingLeft: fluid ? '0' : '6em',
		// 	paddingRight: fluid ? '0' : '6em',
		// },
		// [device.extraLargeDevices]: {
		// 	paddingLeft: fluid ? '0' : '8em',
		// 	paddingRight: fluid ? '0' : '8em',
		// },
	}),
);

// Styles for the Hero section

export const HeroSection = styled.section({
	position: 'relative',
});

export const HeroWrapper = styled.div({
	[device.largeDevices]: {
		display: 'flex',
	},
});

export const LeftCol = styled.div({
	[device.smallDevices]: {
		// width: '90%',
	},
	[device.mediumDevices]: {
		width: '80%',
	},
	[device.largeDevices]: {
		width: '60%',
	},
});

export const HeroImage = styled.img({
	position: 'absolute',
	top: '0em',
	right: -300,
	zIndex: -1,
	height: '100%',
	width: 'auto',
	[device.smallDevices]: {
		right: -250,
	},
	[device.mediumDevices]: {
		right: -200,
	},
	[device.largeDevices]: {
		right: -100,
	},
	[device.extraLargeDevices]: {
		right: '7%',
	},
});

export const Heading = styled.h1({
	fontSize: '3em',
	lineHeight: '1.3em',
	fontWeight: 'bold',
	textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
	[device.mediumDevices]: {
		fontSize: '4em',
	},
});

export const Subheading = styled.p({
	marginTop: '1.5em',
});

export const HeroList = styled.ul({
	margin: '1.5em',
	marginTop: '3em',
	fontWeight: '300',
});

export const HeroListItem = styled.li({
	lineHeight: '2.0em',
	display: 'flex',
	alignItems: 'center',
	fontSize: '1em',
});

// Styles for the Best Selling section

export const TopSellingSection = styled.section({});

export const TSList = styled(Slider)(({ theme }) => ({}));

// Styles for the About section

export const AboutSection = styled.section({
	position: 'relative',
});

export const AboutRightCol = styled.div({
	[device.smallDevices]: {
		width: '90%',
		marginLeft: '10%',
	},
	[device.largeDevices]: {
		width: '60%',
		marginLeft: '40%',
	},
	[device.extraLargeDevices]: {
		width: '50%',
		marginLeft: '50%',
	},
});

export const AboutTitle = styled.h4(({ theme }) => ({
	fontSize: '0.8em',
	fontWeight: '300',
	'&:after': {
		position: 'absolute',
		content: '""',
		height: '0.1em',
		width: '5rem',
		backgroundColor: theme.PRIMARY,
		marginTop: '0.5em',
		marginLeft: '1em',
	},
}));

export const AboutHeading = styled.h1({
	marginTop: '1em',
	fontWeight: '600',
	fontSize: '1.6em',
});

export const AboutSubheading = styled.h3({
	marginTop: '1em',
	fontWeight: '500',
	fontSize: '1.2em',
});

export const AboutText = styled.p({
	marginTop: '1em',
});

export const AboutImage = styled.img({
	position: 'absolute',
	zIndex: -1,
	top: 0,
	left: '-50%',
	width: '100%',
	[device.smallDevices]: {
		width: '90%',
	},
	[device.mediumDevices]: {
		width: '70%',
		left: '-30%',
		margin: '0 auto',
	},
	[device.largeDevices]: {
		left: 0,
		width: '35em',
		height: 'auto',
	},
	[device.extraLargeDevices]: {
		left: '5%',
	},
});

export const SectionSubtitle = styled.h3(({ theme }) => ({
	fontSize: '1em',
	textDecoration: 'underline',
	textDecorationColor: theme.PRIMARY,
	textAlign: 'center',
}));

export const SectionTitle = styled.h2(({ theme }) => ({
	fontSize: '2em',
	textAlign: 'center',
	color: theme.PRIMARY,
	marginBottom: '1em',
	textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
}));

// Styles for the About section

export const ProductSection = styled.section({});

export const ProductList = styled.ul({
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
});

export const ProductListItem = styled.li({
	padding: '0 1.3em',
});

// Styles for the Best Price section

export const BestPriceSection = styled.section({});

export const BestPriceBackground = styled.div({
	backgroundImage: `url(${cta})`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	borderRadius: '1em',
	boxShadow: 'rgba(0, 0, 0, 0.3) 2px 8px 8px',
});

export const BestPriceGlass = styled.div({
	background: 'rgba( 255, 255, 255, 0.05)',
	backdropFilter: 'blur( 2px )',
	// boxShadow: 'rgba(0, 0, 0, 0.3) 2px 8px 8px',
	borderRadius: '1em',
	padding: '2em 1em',
	[device.largeDevices]: {
		width: '50%',
		position: 'relative',
		marginLeft: 'auto',
		marginRight: 0,
		padding: '4em 2em',
	},
});

export const BestPriceContent = styled.div({
	width: '70%',
	marginLeft: 'auto',
	marginRight: 'auto',
});

export const BestPriceHeading = styled.h3(({ theme }) => ({
	fontSize: '1em',
	color: theme.PRIMARY,
	fontWeight: '600',
	letterSpacing: '0.1em',
	textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
}));

export const BestPriceValue = styled.h1({
	fontSize: '5em',
	textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
});

export const BestPriceText = styled.p({});

// Styles for the Best Price section

export const BestSellingSection = styled.section({});

export const BestSellingRow = styled.div({
	display: 'grid',
	[device.mediumDevices]: {
		justifyContent: 'center',
		alignItems: 'center',
		gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
	},
	position: 'relative',
	'&:before': {
		content: '""',
		position: 'absolute',
		backgroundImage: `url(${bestSelling})`,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		zIndex: -1,
		opacity: 0.7,
		[device.mediumDevices]: {
			backgroundPosition: 'center',
		},
	},
});

export const BestSellingTitle = styled.h1({
	margin: '2em 0',
	fontSize: '2em',
	textAlign: 'center',
	fontWeight: '600',
});

export const BestSellingImage = styled.img({
	order: '-1',
	width: '30%',
	margin: '0 auto',
	marginBottom: '1em',
	minWidth: '10rem',
	[device.mediumDevices]: {
		order: 'unset',
		width: '55%',
	},
});

export const BestSellingList = styled.ul({
	[device.mediumDevices]: {
		margin: '0 auto',
	},
});

export const BestSellingListItem = styled.li({
	paddingBottom: '1.5em',
	display: 'flex',
	alignItems: 'center',
});

export const BestSellingInfo = styled.div({});

export const BestSellingListTitle = styled.h4({
	lineHeight: '1.5em',
	fontSize: '0.9em',
	[device.largeDevices]: {
		fontSize: '1em',
	},
});

export const BestSellingListText = styled.p({
	[device.mediumDevices]: {
		fontSize: '.7rem',
	},
});

// Styles for the Contact section

export const ContactSection = styled.section({
	backgroundImage: `url(${bg})`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	textAlign: 'center',
	position: 'relative',
	backgroundAttachment: 'fixed',
});

export const CallIcon = styled(IoMdCall)(({ theme }) => ({
	color: theme.PRIMARY,
	fontSize: '2em',
}));

export const ContactCaption = styled.p<{ secondary?: boolean }>(
	({ secondary }) => ({
		fontWeight: secondary ? '300' : '500',
		marginTop: secondary ? '2em' : '1em',
	}),
);

export const ContactNumber = styled.a<{ secondary?: boolean }>(
	({ secondary }) => ({
		fontWeight: '500',
		fontSize: secondary ? '1em' : '1.5em',
		marginTop: '1em',
		display: 'block',
		paddingLeft: '0.5em',
		paddingRight: '0.5em',
		[device.mediumDevices]: {
			fontSize: secondary ? '1em' : '2em',
			paddingLeft: '2em',
			paddingRight: '2em',
		},
	}),
);

export const ContactList = styled.ul({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '1.5em 0.5em',
	flexDirection: 'column',
	[device.mediumDevices]: {
		flexDirection: 'row',
	},
});

export const ContactListItem = styled.li<{ divider?: boolean }>(
	({ divider, theme }) => ({
		padding: '0.6em',
		[device.mediumDevices]: {
			borderRight: divider ? `1px dashed ${theme.PRIMARY}` : 'none',
		},
	}),
);

export const ContactLocation = styled.a({
	display: 'block',
	marginBottom: '-0.5em',
	fontWeight: '300',
});

export const ContactLocationIcon = styled(BiMapPin)(({ theme }) => ({
	color: theme.PRIMARY,
	fontSize: '2em',
}));

export const TestimonialSection = styled.section({});

export const TestimonialList = styled(Slider)({});

export const TestimonialListItem = styled.div({
	background: 'rgba( 255, 255, 255, 0.05)',
	backdropFilter: 'blur( 1px )',
	boxShadow: 'rgba(0, 0, 0, 0.3) 2px 8px 8px',
	borderRadius: '0.5em',
	alignItems: 'center',
	padding: '1em',
	margin: '1em 0',
	textAlign: 'center',
	marginTop: '5em',
	width: '70% !important',
});

export const TestimonialImage = styled.img({
	margin: '0 auto',
	marginTop: '-3.5rem',
	height: '5em',
	width: '5em',
});

export const TestimonialHeading = styled.h3(({ theme }) => ({
	color: theme.PRIMARY,
	margin: '0.5em 0',
}));

export const TestimonialText = styled.p({});

export const FooterSection = styled.section({
	backgroundImage: `url(${bg})`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
});

export const FooterRow = styled.div({
	display: 'flex',
	flexWrap: 'wrap',
	[device.mediumDevices]: {
		justifyContent: 'space-evenly',
	},
});

export const FooterColumn = styled.div({
	flexGrow: '1',
	margin: '0 1em',
	minWidth: '45%',
	[device.mediumDevices]: {
		minWidth: '30%',
	},
	[device.largeDevices]: {
		minWidth: '20%',
	},
});

export const FooterTitle = styled.h3(({ theme }) => ({
	fontSize: '1.4em',
	fontWeight: '500',
	marginBottom: '1em',
	'&:after': {
		position: 'absolute',
		content: '""',
		height: '0.1em',
		width: '5rem',
		backgroundColor: theme.PRIMARY,
		marginTop: '0.7em',
		marginLeft: '1em',
	},
}));

export const FooterList = styled.ul({
	marginBottom: '2em',
});

export const FooterListItem = styled.li({
	lineHeight: '2em',
});

export const FooterLogo = styled.div({
	[device.mediumDevices]: {
		textAlign: 'center',
	},
});

export const FooterLogoImage = styled.img({
	width: '7rem',
	height: 'auto',
});

export const FooterLogoText = styled.h3({
	fontWeight: '500',
	fontSize: '1.5em',
	marginLeft: '1em',
	[device.mediumDevices]: {
		marginLeft: 0,
	},
});

export const CopyrightSection = styled.section({});

export const CopyrightText = styled.p({
	padding: '2em 0',
});

export const CopyrightBrandText = styled.span(({ theme }) => ({
	color: theme.PRIMARY,
	marginRight: '0.5em',
}));
