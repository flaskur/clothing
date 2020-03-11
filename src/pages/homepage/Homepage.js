import React from 'react';
import './Homepage.scss'; // You can import a sass file? Yeah, since CRA 2.0 SASS is supported.
import Directory from '../../components/directory/Directory';

const Homepage = function() {
	return (
		// Decided that format for classnames should be snake case, not follow BEM for now.
		<div className="homepage">
			<Directory />
		</div>
	);
};

export default Homepage;
