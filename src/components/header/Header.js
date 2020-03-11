import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = function() {
	return (
		<div className="header">
			<Link to="/" className="logo_container">
				<Logo className="logo" />
			</Link>

			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					CONTACT
				</Link>
			</div>
		</div>
	);
};

export default Header;
