import React from 'react';
import './Collection.scss';
import CollectionItem from '../collection_item/CollectionItem';

const Collection = function({ title, items }) {
	return (
		<div className="collection">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{/* Maybe performance issue. */}
				{items.filter((item, index) => index < 4).map((item) => {
					return <CollectionItem item={item} />;
				})}
			</div>
		</div>
	);
};

export default Collection;
