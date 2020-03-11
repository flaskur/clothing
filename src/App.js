import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import SigninPage from './pages/signinpage/SigninPage';
import Header from './components/header/Header';

const App = function() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SigninPage} />
			</Switch>
		</div>
	);
};

export default App;

/**
 * Design planning, assume that the App component is your baseline. Everything extends from that and the index.css is just default formatting like making margins 0.
 * Grid menu should use CSS grid with 1/3 and 1/2 formatting, but should have a media query of spacing to be 1 eventually.
 * 
 * Use the exact keyword if you want the exact path. Not sure why, but you should wrap the routes in a Switch tag. If you use these routes and specify a component, there will be 3 props attached to that component. Namely history, location, match. History has the push function, location and match have the pathname. This is useful because you can find the current url using this extrapolation instead of knowing what path you are currently on. You would not use the exact keyword if you had a parameter path using :. You can access the params given using props.match.params.paramName. How would you make restricted paths?
 * 
 * Prop tunneling is relying way too much on the prop tree and making it confusing. This happens for the history stuff. Why do I need to keep track of history anyways? The withRouter property function allows us to avoid using prop drilling and instead give access to the history, location, and match by nesting the export component.
 */
