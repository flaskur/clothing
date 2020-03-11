import React from 'react';
import './FormInput.scss';

const FormInput = function({ handleInputChange, label, ...otherProps }) {
	return (
		<div className="group">
			<input className="form_input" onChange={handleInputChange} {...otherProps} />
			{label ? (
				<label className={`${otherProps.value.length ? 'shrink' : ''} form_input_label`}>{label}</label>
			) : null}
		</div>
	);
};

export default FormInput;
