import React from 'react';
import ActionButton from '../../core/ActionButton';
import Collection from '../../core/Collection';
import CollectionItem from '../../core/CollectionItem';

class HomeView extends React.Component {
	render() {
		const careTags = [
			{ name: 'Hola' },	
			{ name: 'Hola' },	
			{ name: 'Hola' },	
			{ name: 'Hola' },	
			{ name: 'Hola' },	
			{ name: 'Hola' },	
			{ name: 'Hola' },	
		];
		
		return (
			<div>
				<Collection>
				{
					careTags.map((careTag, index) => { 
						return <CollectionItem key={index} avatar={true} />
					})
				}	
				</Collection>
				<ActionButton />
			</div>
		);
	}
}

export default HomeView;