import React from 'react';
import { buildStyles } from '../../plugins/utils';

import rawStyles from './button.styles';

const styles = buildStyles(rawStyles);

function Button({ type = 'primary', href = '#', className = '', children }) {
	return (
		<a href={href} className={`${styles.button} ${styles['button-' + type]} ${className}`}>{children}</a>
	);
}

export default Button;
