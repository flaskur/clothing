import React from 'react';
import './CollectionItem.scss';

const CollectionItem = function({ item }) {
	const { id, name, imageUrl, price } = item;
	return (
		<div className="collection_item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className="collection_footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
		</div>
	);
};

export default CollectionItem;
