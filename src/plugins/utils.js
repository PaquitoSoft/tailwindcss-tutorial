import cx from 'classnames';

export function buildStyles(stylesMap) {
	return Object.keys(stylesMap).reduce((styles, className) => {
		styles[className] = cx(stylesMap[className]);
		return styles;
	}, {});
}
