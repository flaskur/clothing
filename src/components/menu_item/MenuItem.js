import React from 'react';
import './MenuItem.scss';

const MenuItem = function({ title, imageUrl, size }) {
	return (
		<div
			// Adding interpolated size prop.
			className={`${size} menu_item`}
		>
			{/* The background image styling is nested for CSS reasons. */}
			<div
				className="background_image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

// My theory for styling would just to use the inline JS styling with ternary size checking if undefined. size === large ?

export default MenuItem;
