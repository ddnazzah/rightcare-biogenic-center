import React from 'react';
import { Navbar } from '../Navbar';
import { ScrollIndicator } from '../ScrollIndicator';

interface Props {
	children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
	return (
		<React.Fragment>
			<ScrollIndicator />
			<Navbar />
			{children}
		</React.Fragment>
	);
};

export default MainLayout;
