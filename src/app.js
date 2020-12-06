import React from 'react';

import './tailwind.css';
import logoUrl from './images/logo.svg';
import beachWorkImgUrl from './images/beach-work.jpg';

function App() {
	return (
		<main>
			<div className="px-8 py-12">
				<img className="h-10" src={logoUrl} alt="Workcation"/>
				<img className="mt-6 rounded-lg shadow-xl" src={beachWorkImgUrl} alt="Woman workcationing on the beach"/>
				<h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
					You can work from anywhere.<br />
					<span className="text-indigo-500">Take advantage of it</span>
				</h1>
				<p className="mt-2 text-gray-600">
					Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
				</p>
				<div className="mt-4">
					<a className="inline-block bg-indigo-500 text-white px-5 py-3 shadow-lg rounded-lg uppercase text-sm tracking-wider font-semibold" href="#">Book your escape</a>
				</div>
			</div>
		</main>
	);
}

export default App;
