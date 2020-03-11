import React from 'react';
import './Directory.scss';
import MenuItem from '../menu_item/MenuItem';

const Directory = function() {
	const [ sections, setSections ] = React.useState([
		{
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			id: 1,
			linkUrl: 'hats'
		},
		{
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			id: 2,
			linkUrl: 'jackets'
		},
		{
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			linkUrl: 'sneakers'
		},
		{
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			size: 'large',
			id: 4,
			linkUrl: 'womens'
		},
		{
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			size: 'large',
			id: 5,
			linkUrl: 'mens'
		}
	]);

	return (
		<div className="directory_menu">
			{sections.map((section) => {
				return (
					<MenuItem
						key={section.id}
						title={section.title}
						imageUrl={section.imageUrl}
						size={section.size}
						linkUrl={section.linkUrl}
					/>

					// You can destructure sections like {id, ...otherSectionProps} then pass into MenuItem as {...otherSectionProps} since the prop names are the same.
				);
			})};
		</div>
	);
};

export default Directory;
