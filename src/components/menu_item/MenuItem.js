import React from 'react';
import { withRouter } from 'react-router-dom'; // Higher order component. Function that takes a component, modifies, and returns new component.
import './MenuItem.scss';

const MenuItem = function({ title, imageUrl, size, linkUrl, history, match }) {
	return (
		<div
			// Adding interpolated size prop.
			className={`${size} menu_item`}
			// This syntax is correct because match.url has / at the end.
			onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem); // To give access to history, location, match.
