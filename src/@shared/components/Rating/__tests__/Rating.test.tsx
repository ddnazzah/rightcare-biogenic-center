import { render } from '@testing/test-utils';
import React from 'react';
import Rating from '../Rating';

it('renders correctly', () => {
	render(<Rating rating={5} />);
});
