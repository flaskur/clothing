import React from 'react';
import './CustomButton.scss';

const CustomButton = function({ children, otherProps }) {
	return (
		<button className="custom_button" {...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
