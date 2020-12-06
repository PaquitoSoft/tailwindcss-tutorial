import React from 'react';
import { buildStyles } from '../../plugins/utils';

import rawStyles from './destination-card.styles';

const styles = buildStyles(rawStyles);

function DestinationCard({ destination }) {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={destination.imageUrl} alt={destination.name}/>
			<div className={styles.contentWrapper}>
				<h3 className={styles.name}>{destination.name}</h3>
				<p className={styles.description}>{destination.averagePrice} / night average</p>
				<a href="#" className={styles.propertiesLink}>Explore {destination.propertiesCount} properties</a>
			</div>
		</div>
	);
}

export default DestinationCard;
