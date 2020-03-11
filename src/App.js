import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';

const App = function() {
	return (
		<div className="App">
			<h1>APPTAKEN</h1>
			<Homepage />
		</div>
	);
};

export default App;

/**
 * Design planning, assume that the App component is your baseline. Everything extends from that and the index.css is just default formatting like making margins 0.
 * Grid menu should use CSS grid with 1/3 and 1/2 formatting, but should have a media query of spacing to be 1 eventually.
 */
