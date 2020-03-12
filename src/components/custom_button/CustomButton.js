import React from 'react';
import './CustomButton.scss';

const CustomButton = function({ children, isGoogleSignIn, ...otherProps }) {
	return (
		<button className={`${isGoogleSignIn ? 'google_sign_in' : ''} custom_button`} {...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
