import React from 'react';

const Homepage = function() {
	return (
		// Decided that format for classnames should be snake case, not follow BEM for now.
		<div className="homepage">
			{/* Menu is likely the wrapper for CSS Grid */}
			<div className="directory_menu">
				{/* Hat */}
				<div className="menu_item">
					<div className="content">
						<h1 className="title">Hats</h1>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>
				{/* Jackets */}
				<div className="menu_item">
					<div className="content">
						<h1 className="title">jackets</h1>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>
				{/* Sutis */}
				<div className="menu_item">
					<div className="content">
						<h1 className="title">sutis</h1>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>

				{/* Womens */}
				<div className="menu_item">
					<div className="content">
						<h1 className="title">womens</h1>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>
				{/* Mens */}
				<div className="menu_item">
					<div className="content">
						<h1 className="title">mens</h1>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
