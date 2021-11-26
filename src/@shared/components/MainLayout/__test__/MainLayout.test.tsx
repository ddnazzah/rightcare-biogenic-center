import { render } from '@testing/test-utils';
import React from 'react';
import { MainLayout } from '..';

it('renders correctly', () => {
	render(<MainLayout children={null} />);
});
