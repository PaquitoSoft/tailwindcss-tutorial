import React from 'react';
import { buildStyles } from '../../plugins/utils';

const styles = buildStyles({
	container: [
		'px-4',
		'py-5',
		'border-t',
		'border-gray-800',
		'sm:hidden'
	],
	userWrapper: [
		'flex',
		'items-center'
	],
	userIcon: [
		'h-8',
		'w-8',
		'border-2',
		'border-gray-600',
		'rounded-full'
	],
	userName: [
		'text-white',
		'font-semibold',
		'ml-3'
	],
	accountLinksWrapper: [
		'mt-4'
	],
	accountLink: [
		'block',
		'text-gray-400',
		'hover:text-white'
	]
});

function AccountDropdownXS() {
	return (
		<div className={styles.container}>
			<div className={styles.userWrapper}>
				<img className={styles.userIcon} src="https://avatars3.githubusercontent.com/u/166022?s=400&v=4" alt="PaquitoSoft"/>
				<span className={styles.userName}>PaquitoSoft</span>
			</div>
								
			<div className={styles.accountLinksWrapper}>
				<a className={styles.accountLink} href="#">Settings</a>
				<a className={`${styles.accountLink} mt-2`} href="#">Support</a>
				<a className={`${styles.accountLink} mt-2`} href="#">Logout</a>
			</div>
		</div>
	);
}

export default AccountDropdownXS;
