import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useResponsive } from './responsive-provider';

const SuspenseFallback = () => (null);

function ResponsiveComponent({
	xs,
	sm,
	lg,
	md,
	xl,
	xxl,
	loadingComponent,
	children,
	...props
}) {
	const { selectResponsiveComponent } = useResponsive();
	const Fallback = loadingComponent || SuspenseFallback;
	const Component = selectResponsiveComponent({ xs, sm, md, lg, xl, xxl });
	
	return (
		<Suspense fallback={<Fallback />}>
			<Component {...props}>{children}</Component>
		</Suspense>
	);
}

ResponsiveComponent.propTypes = {
	xs: PropTypes.func,
	sm: PropTypes.func,
	md: PropTypes.func,
	lg: PropTypes.func,
	xl: PropTypes.func,
	xxl: PropTypes.func,
	loadingComponent: PropTypes.elementType,
	children: PropTypes.node
};

export default ResponsiveComponent;
