import React from 'react';

import { ResponsiveProvider } from './components/responsive-component/responsive-provider';
import Button from './components/button/button';
import DestinationCard from './components/destination-card/destination-card';
import NavBar from './components/nav-bar/nav-bar';

import './tailwind.css';
import logoUrl from './images/logo.svg';
import beachWorkImgUrl from './images/beach-work.jpg';

const destinations = [
	{ name: 'Chicago', imageUrl: 'https://via.placeholder.com/250', averagePrice: '$130', propertiesCount: 115 },
	{ name: 'Seattle', imageUrl: 'https://via.placeholder.com/250', averagePrice: '$135', propertiesCount: 63 },
	{ name: 'Colorado', imageUrl: 'https://via.placeholder.com/250', averagePrice: '$85', propertiesCount: 47 },
	{ name: 'Miami', imageUrl: 'https://via.placeholder.com/250', averagePrice: '$115', propertiesCount: 86 },
	{ name: 'Toronto', imageUrl: 'https://via.placeholder.com/250', averagePrice: '$120', propertiesCount: 75 }
];

function App() {
	return (
		<ResponsiveProvider>
			<main>
				<NavBar />
				<div className="bg-gray-100 flex">
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
				</div>

				<div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
					<h2 className="text-xl text-gray-900">Popular destinations</h2>
					<p className="text-gray-600">A selection of great work-friendly cities with lots to see</p>
					<div className="flex flex-wrap -mx-4">
						{destinations.map(destination => {
							return (
								<div className="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3" key={destination.name}>
									<DestinationCard destination={destination} />
								</div>
							);
						})}
					</div>
				</div>
			</main>

			{/*
			<div className="fixed h-24 w-full top-0 left-0">
				<div className="bg-indigo-300 h-24" style={{ width: '640px'}}>Extra small: 640</div>
				<div className="bg-indigo-300 h-24" style={{ width: '768px'}}>Small: 768</div>
				<div className="bg-indigo-400 h-24" style={{ width: '1024px'}}>Large: 1024</div>
				<div className="bg-indigo-500 h-24" style={{ width: '1280px'}}>Extra large: 1280</div>
				<div className="bg-indigo-600 h-24" style={{ width: '1536px'}}>Double extra large: 1536</div>
				<div className="bg-indigo-700 h-24" style={{ width: '100%'}}>Full: 100%</div>
			</div>
			*/}
		</ResponsiveProvider>
	);
}

// { name: 'xs', size: 640 },
// { name: 'sm', size: 768 },
// { name: 'lg', size: 1024 },
// { name: 'xl', size: 1280 },
// { name: 'xxl', size: 1536 }

export default App;
