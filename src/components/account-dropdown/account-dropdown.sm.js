import React, { useState, useEffect } from 'react';
import { buildStyles } from '../../plugins/utils';

const styles = buildStyles({
	container: [
		'relative',
		'ml-8'
	],
	button: [
		'relative',
		'z-20',
		'block',
		'h-8',
		'w-8',
		'rounded-full',
		'overflow-hidden',
		'border-2',
		'border-gray-600',
		'focus:outline-none',
		'focus:border-white'
	],
	userIcon: [
		'h-full',
		'w-full'
	],
	overlay: [
		'fixed',
		'z-10',
		'inset-0',
		'h-full',
		'w-full',
		'bg-black',
		'opacity-50',
		'cursor-default'
	],
	accountLinksWrapper: [
		'w-32',
		'mt-2',
		'py-2',
		'absolute',
		'right-0',
		'z-20',
		'bg-white',
		'rounded-lg',
		'shadow-xl'
	],
	accountLink: [
		'block',
		'px-4',
		'py-2',
		'text-gray-800',
		'hover:bg-indigo-500',
		'hover:text-white'
	]
});

function AccountDropdownSM({ className = '' }) {
	const [isOpen, setIsOpen] = useState(false);
	const handleEscape = event => {
		if (event.keyCode === 27) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleEscape);
		return () => document.removeEventListener('keydown', handleEscape);
	});
	
	return (
		<div className={`${styles.container} ${className}`}>
			<button 
				type="button" 
				className={styles.button}
				onClick={() => setIsOpen(!isOpen)}
			>
				<img className={styles.userIcon} src="https://avatars3.githubusercontent.com/u/166022?s=400&v=4" alt="PaquitoSoft"/>
			</button>
			
			<button 
				className={`${styles.overlay} ${isOpen ? 'block' : 'hidden'}`}
				tabIndex={-1}
				onClick={() => setIsOpen(false)} 
			/>
			
			<div className={`${styles.accountLinksWrapper} ${isOpen ? 'block' : 'hidden'}`}>
				<a className={styles.accountLink} href="#">Settings</a>
				<a className={styles.accountLink} href="#">Support</a>
				<a className={styles.accountLink} href="#">Logout</a>
			</div>
		</div>
	);
}

export default AccountDropdownSM;
