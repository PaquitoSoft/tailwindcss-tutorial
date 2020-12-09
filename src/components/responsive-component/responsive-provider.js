import React, {
	useContext,
	useEffect,
	useRef,
	useState,
	lazy
} from 'react';
import PropTypes from 'prop-types';

const BREAKPOINTS = [
	{ name: 'xs', size: 0 },
	{ name: 'sm', size: 640 },
	{ name: 'md', size: 768 },
	{ name: 'lg', size: 1024 },
	{ name: 'xl', size: 1280 },
	{ name: 'xxl', size: 1536 }
];

const ResponsiveContext = React.createContext({
	breakpoints: {},
	currentBreakpoint: {},
	// eslint-disable-next-line no-unused-vars
	selectResponsiveComponent: (components) => null
});

function findResponsiveComponent(components, breakpoints, currentBreakpoint) {
	const breakPointIndex = breakpoints.findIndex(bp => bp.name === currentBreakpoint.name) || 0;

	for (let index = breakPointIndex; index >= 0; index--) {
		if (components[breakpoints[index].name]) {
			return components[breakpoints[index].name];
		}
	}

	const error = new Error('Responsive Component not found');
	error.meta = {
		providedComponents: components,
		currentBreakpoint: currentBreakpoint.name
	};
	throw error;
}

function calculateBreakpoint(reversedBreakpoints) {
	for (let breakpoint of reversedBreakpoints) {
		if (window.matchMedia(`(min-width: ${breakpoint.size}px)`).matches) {
			return breakpoint;
		}
	}
}

function ResponsiveProvider({ breakpoints = BREAKPOINTS, children }) {
	const reversedBreakPoints = useRef([...breakpoints].reverse());
	const [currentBreakpoint, setCurrentBreakpoint] = useState(calculateBreakpoint(reversedBreakPoints.current) || breakpoints[0]);
	
	const onResize = () => {
		const newBreakpoint = calculateBreakpoint(reversedBreakPoints.current) || breakpoints[0];
	
		setCurrentBreakpoint((prevBreakpoint => {
			// console.log('breakpoints:', {
			// 	newBreakpoint,
			// 	prevBreakpoint
			// });
			return prevBreakpoint.name !== newBreakpoint.name ? newBreakpoint : prevBreakpoint;
		}));
	};

	useEffect(() => {
		onResize();
		window.addEventListener('resize', onResize, { passive: true });

		return () => window.removeEventListener('resize', onResize);
	}, []);

	console.log('Render# Current breakpoint:', currentBreakpoint);

	return (
		<ResponsiveContext.Provider
			value={{
				breakpoints,
				currentBreakpoint,
				selectResponsiveComponent: (components) => lazy(findResponsiveComponent(components, breakpoints, currentBreakpoint))
			}}
		>
			{children}
		</ResponsiveContext.Provider>
	)
}

ResponsiveProvider.propTypes = {
	breakpoints: PropTypes.shape({
		xs: PropTypes.number,
		sm: PropTypes.number,
		lg: PropTypes.number,
		xl: PropTypes.number,
		xxl: PropTypes.number,
	}),
	children: PropTypes.node.isRequired
};

const useResponsive = () => useContext(ResponsiveContext);

export {
	ResponsiveProvider,
	useResponsive
};
