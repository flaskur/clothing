import React from 'react';
import './ShopPage.scss';
import SHOP_PAGE_DATA from './ShopPageData';
import Collection from '../../components/collection/Collection';

const ShopPage = function() {
	const [ collections, setCollections ] = React.useState(SHOP_PAGE_DATA);

	return (
		<div className="shoppage">
			{collections.map((collection) => {
				return (
					<Collection
						key={collection.id}
						title={collection.title}
						routeName={collection.routeName}
						items={collection.items}
					/>
				);
			})}
		</div>
	);
};

export default ShopPage;
