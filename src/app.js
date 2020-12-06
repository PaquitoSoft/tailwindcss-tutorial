import React from 'react';

import Button from './components/button/button';

import './tailwind.css';
import logoUrl from './images/logo.svg';
import beachWorkImgUrl from './images/beach-work.jpg';

function App() {
	return (
		<main className="bg-gray-100 flex">
			<div className="px-8 py-12 max-w-md sm:max-w-xl mx-auto lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12">
				<div className="xl:max-w-lg xl:ml-auto">
					<img className="h-10" src={logoUrl} alt="Workcation"/>
					<img className="mt-6 sm:mt-8 rounded-lg shadow-xl sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src={beachWorkImgUrl} alt="Woman workcationing on the beach"/>
					<h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:text-2xl xl:text-4xl">
						You can work from anywhere.<br />
						<span className="text-indigo-500">Take advantage of it</span>
					</h1>
					<p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
						Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
					</p>
					<div className="mt-4 sm:mt-6">
						{/* <a className="btn btn-indigo shadow-lg" href="#">Book your escape</a>
						<a className="btn btn-gray shadow-lg ml-2" href="#">Learn more</a> */}
						<Button className="shadow-lg">Book your escape</Button>
						<Button className="ml-2" type="secondary">Learn more</Button>
					</div>
				</div>
			</div>
			<div className="hidden lg:block lg:w-1/2 lg:relative">
				<img className="absolute inset-0 h-full w-full object-cover object-center" src={beachWorkImgUrl} alt="Woman workcationing on the beach"/>
			</div>
		</main>
	);
}

export default App;
