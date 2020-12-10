import React from 'react';
import PropTypes from 'prop-types';

import ResponsiveComponent from '../responsive-component/responsive-component';

function AccountDropdown({ children, ...props }) {
	return (
		<ResponsiveComponent 
			xs={() => import('./account-dropdown.xs')}
			sm={() => import('./account-dropdown.sm')}
			{...props}
		>{children}</ResponsiveComponent>
	)
}

AccountDropdown.propTypes = {
	children: PropTypes.node
};

export default AccountDropdown;
