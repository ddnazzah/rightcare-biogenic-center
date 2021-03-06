/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2021-11-19 00:48:07
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2021-12-19 23:30:04
 */

import { Products } from '@shared/assets/data';
import aboutImage from '@shared/assets/images/about2.png';
import testimonial from '@shared/assets/images/avatar.svg';
import logo from '@shared/assets/images/logo.png';
import heroImage from '@shared/assets/images/mint2.png';
import { Button, MainLayout } from '@shared/components';
import React from 'react';
import { Bullet, Distributors, Product, TopSelling } from './components';
import {
	AboutHeading,
	AboutImage,
	AboutRightCol,
	AboutSection,
	AboutSubheading,
	AboutText,
	AboutTitle,
	BestPriceBackground,
	BestPriceContent,
	BestPriceGlass,
	BestPriceHeading,
	BestPriceSection,
	BestPriceText,
	BestPriceValue,
	BestSellingImage,
	BestSellingInfo,
	BestSellingList,
	BestSellingListItem,
	BestSellingListTitle,
	BestSellingRow,
	BestSellingSection,
	BestSellingTitle,
	CallIcon,
	ContactCaption,
	ContactList,
	ContactListItem,
	ContactLocation,
	ContactLocationIcon,
	ContactNumber,
	ContactSection,
	Container,
	CopyrightBrandText,
	CopyrightSection,
	CopyrightText,
	DistributorsCaption,
	DistributorsSection,
	FooterColumn,
	FooterList,
	FooterListItem,
	FooterLogo,
	FooterLogoImage,
	FooterLogoText,
	FooterRow,
	FooterSection,
	FooterTitle,
	Heading,
	HeroImage,
	HeroList,
	HeroListItem,
	HeroSection,
	HeroWrapper,
	LeftCol,
	ProductList,
	ProductListItem,
	ProductSection,
	SectionSubtitle,
	SectionTitle,
	Subheading,
	TestimonialHeading,
	TestimonialImage,
	TestimonialList,
	TestimonialListItem,
	TestimonialSection,
	TestimonialText,
	TopSellingSection,
	TSList,
} from './components/styledComponents';
interface Props {}

const Home = (props: Props) => {
	const bestProduct = Products[1];

	const half = Math.ceil(bestProduct.benefits.length / 2);

	const firstHalf = bestProduct.benefits.slice(0, half);

	const secondHalf = bestProduct.benefits.slice(-half);

	return (
		<MainLayout>
			<HeroSection id="homeSection">
				<Container>
					<HeroWrapper>
						<LeftCol>
							<Heading>Best Biogenic Products Centre</Heading>
							<Subheading>
								Augue vitae magnis aliquam pretium purus dolorum
								repudiandae inceptos dolores, exercitationem,
								proident sequi tenetur?
							</Subheading>
							<HeroList>
								<HeroListItem>
									<Bullet check />
									Marketters of Kedi products
								</HeroListItem>
								<HeroListItem>
									<Bullet check />
									Body massage
								</HeroListItem>
								<HeroListItem>
									<Bullet check />
									Professional advice
								</HeroListItem>
							</HeroList>
							<Button text="READ MORE" href="#aboutSection" />
						</LeftCol>

						<HeroImage src={heroImage}></HeroImage>
					</HeroWrapper>
				</Container>
			</HeroSection>

			<TopSellingSection id="topSellingSection">
				<Container fluid>
					<TSList {...BS_Settings}>
						{Products.slice(0, 8).map((product, index) => (
							<TopSelling
								name={product.name}
								image={product.image}
								key={index.toString()}
							/>
						))}
					</TSList>
				</Container>
			</TopSellingSection>

			<AboutSection id="aboutSection">
				<Container>
					<AboutImage src={aboutImage}></AboutImage>
					<AboutRightCol>
						<AboutTitle>ABOUT OUR DISPENSARY</AboutTitle>
						<AboutHeading>
							Ipsum duis aute mollit facilisis proident! Tenetur
							fugit et?
						</AboutHeading>
						<AboutSubheading>
							Eget urna sociosqu, cupidatat. Inceptos. Fermentum,
							laoreet, viverra elementum ea
						</AboutSubheading>
						<AboutText>
							Ducimus mauris quae quod justo quae cillum ullam
							hendrerit commodo perferendis tristique qui felis
							risus beatae adipiscing justo auctor primis,
							diamlorem cupidatat. Alias risus odio cras eos
							fugiat duis quis?
						</AboutText>
						<Button text="OUR PRODUCTS" href="#productSection" />
					</AboutRightCol>
				</Container>
			</AboutSection>

			<ProductSection id="productSection">
				<Container>
					<SectionSubtitle>ONLINE STORE</SectionSubtitle>
					<SectionTitle>Popular Products</SectionTitle>
					<ProductList>
						{Products.map((product, index) => (
							<ProductListItem key={index.toString()}>
								<Product
									name={product.name}
									image={product.image}
									descs={product.benefits}
								/>
							</ProductListItem>
						))}
					</ProductList>
				</Container>
			</ProductSection>

			<BestPriceSection>
				<Container>
					<BestPriceBackground>
						<BestPriceGlass>
							<BestPriceContent>
								<BestPriceHeading>BEST PRICES</BestPriceHeading>
								<BestPriceValue>-13%</BestPriceValue>
								<BestPriceText>
									Good for mattis montes mollitia hic torquent
									ullamcorper convallis habitasse iaculis
								</BestPriceText>
								<Button
									text="CALL TO ORDER NOW"
									href="#contactSection"
								/>
							</BestPriceContent>
						</BestPriceGlass>
					</BestPriceBackground>
				</Container>
			</BestPriceSection>

			<BestSellingSection>
				<Container>
					<SectionSubtitle>BEST SELLING</SectionSubtitle>
					<SectionTitle>Essential Product</SectionTitle>
					<BestSellingTitle>{bestProduct.name}</BestSellingTitle>
					<BestSellingRow>
						<BestSellingList>
							{firstHalf.map((benefit, index) => (
								<BestSellingListItem key={index.toString()}>
									<Bullet />
									<BestSellingInfo>
										<BestSellingListTitle>
											{benefit}
										</BestSellingListTitle>
										{/* <BestSellingListText>
											Lorem, ipsum dolor sit amet
											consectetur adipisicing elit.
										</BestSellingListText> */}
									</BestSellingInfo>
								</BestSellingListItem>
							))}
						</BestSellingList>

						<BestSellingImage src={bestProduct.image} />

						<BestSellingList>
							{secondHalf.map((benefit, index) => (
								<BestSellingListItem key={index.toString()}>
									<Bullet />
									<BestSellingInfo>
										<BestSellingListTitle>
											{benefit}
										</BestSellingListTitle>
										{/* <BestSellingListText>
											Lorem, ipsum dolor sit amet
											consectetur adipisicing elit.
										</BestSellingListText> */}
									</BestSellingInfo>
								</BestSellingListItem>
							))}
						</BestSellingList>
					</BestSellingRow>
				</Container>
			</BestSellingSection>

			<ContactSection id="contactSection">
				<Container>
					<CallIcon />
					<ContactCaption>
						Need More Information? Call to our Specialist for Free
						Consultation
					</ContactCaption>
					<ContactNumber href="tel:+233246921636">
						+233 (020) 24 692 1636
					</ContactNumber>
					<ContactCaption secondary>
						Get to our shop closest to you to get your products
						today
					</ContactCaption>
					<ContactList>
						<ContactListItem divider>
							<ContactLocationIcon />
							<ContactLocation href="https://goo.gl/maps/LmjnRaGVoqPUoymU9">
								Madina
							</ContactLocation>
							<ContactNumber href="tel:+233246921636" secondary>
								+233 (020) 24 692 1636
							</ContactNumber>
						</ContactListItem>
						<ContactListItem>
							<ContactLocationIcon />
							<ContactLocation href="https://goo.gl/maps/LmjnRaGVoqPUoymU9">
								Tema
							</ContactLocation>
							<ContactNumber href="tel:+233246921636" secondary>
								+233 (020) 24 692 1636
							</ContactNumber>
						</ContactListItem>
					</ContactList>
					<Button text="CONTACT US" href="tel:+233246921636" />
				</Container>
			</ContactSection>

			<DistributorsSection>
				<Container>
					<SectionSubtitle>Business Opportunity</SectionSubtitle>
					<SectionTitle>Regional Distributors</SectionTitle>
					<DistributorsCaption>
						Order Kedi (VitaNature) products directly from a member
						near you or become an Independent Distributor to take
						advantage of the Kedi (VitaNature) Business Opportunity
					</DistributorsCaption>
					<Distributors />
				</Container>
			</DistributorsSection>

			<TestimonialSection>
				<Container fluid>
					<SectionSubtitle>Testimonials</SectionSubtitle>
					<SectionTitle>What Our Customers Say</SectionTitle>
					<TestimonialList {...TS_Settings}>
						<TestimonialListItem>
							<TestimonialImage src={testimonial} />
							<TestimonialHeading>
								Annette Black
							</TestimonialHeading>
							<TestimonialText>
								Asperiores nibh parturient nemo facilisis
								voluptas. Possimus feugiat quia excepteur.
								Parturient litora nulla massa voluptate
							</TestimonialText>
						</TestimonialListItem>
						<TestimonialListItem>
							<TestimonialImage src={testimonial} />
							<TestimonialHeading>
								Annette Black
							</TestimonialHeading>
							<TestimonialText>
								Asperiores nibh parturient nemo facilisis
								voluptas. Possimus feugiat quia excepteur.
								Parturient litora nulla massa voluptate
							</TestimonialText>
						</TestimonialListItem>
						<TestimonialListItem>
							<TestimonialImage src={testimonial} />
							<TestimonialHeading>
								Annette Black
							</TestimonialHeading>
							<TestimonialText>
								Asperiores nibh parturient nemo facilisis
								voluptas. Possimus feugiat quia excepteur.
								Parturient litora nulla massa voluptate
							</TestimonialText>
						</TestimonialListItem>
						<TestimonialListItem>
							<TestimonialImage src={testimonial} />
							<TestimonialHeading>
								Annette Black
							</TestimonialHeading>
							<TestimonialText>
								Asperiores nibh parturient nemo facilisis
								voluptas. Possimus feugiat quia excepteur.
								Parturient litora nulla massa voluptate
							</TestimonialText>
						</TestimonialListItem>
					</TestimonialList>
				</Container>
			</TestimonialSection>

			<FooterSection>
				<Container>
					<FooterRow>
						<FooterColumn>
							<FooterTitle>Opening hours</FooterTitle>
							<FooterList>
								<FooterListItem>
									Monday - Friday............. 09:00 - 17:00
								</FooterListItem>
								<FooterListItem>
									Saturday.....................................
									09:00 - 17:00
								</FooterListItem>
								<FooterListItem>
									Sunday.........................................................
									Closed
								</FooterListItem>
							</FooterList>
						</FooterColumn>
						<FooterColumn>
							<FooterTitle>Contacts</FooterTitle>
							<FooterList>
								<FooterListItem>
									Consultant ..................+233 (020) 24
									692 1636
								</FooterListItem>
								<FooterListItem>
									Madina................................+233
									(020) 24 692 1636
								</FooterListItem>
								<FooterListItem>
									Tema
									....................................+233
									(020) 24 692 1636
								</FooterListItem>
							</FooterList>
						</FooterColumn>
						<FooterColumn>
							<FooterLogo>
								<FooterLogoImage src={logo} />
								<FooterLogoText>RBC</FooterLogoText>
							</FooterLogo>
						</FooterColumn>
					</FooterRow>
				</Container>
			</FooterSection>

			<CopyrightSection>
				<Container collapse>
					<CopyrightText>
						<CopyrightBrandText>
							Rightcare Biogenic Center
						</CopyrightBrandText>
						&copy; All Rights Reserved - {new Date().getFullYear()}
					</CopyrightText>
				</Container>
			</CopyrightSection>
		</MainLayout>
	);
};

export default Home;

const BS_Settings = {
	dots: true,
	// infinite: true,
	speed: 5000,
	autoplaySpeed: 10,
	slidesToShow: 4,
	slidesToScroll: 1,
	centerMode: true,
	autoplay: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

const TS_Settings = {
	dots: true,
	// infinite: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	autoplay: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		// {
		// 	breakpoint: 768,
		// 	settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 	},
		// },
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};
