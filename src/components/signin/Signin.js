import React from 'react';
import './Signin.scss';
import FormInput from '../form_input/FormInput';
import CustomButton from '../custom_button/CustomButton';

const Signin = function() {
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');

	const handleFormSubmit = function(event) {
		event.preventDefault();
		setEmail('');
		setPassword('');
	};

	const handleInputChange = function(event) {
		const { value, name } = event.target;
		console.log(event.target);

		if (name === 'email') setEmail(value);
		else if (name === 'password') setPassword(value);
	};

	return (
		<div className="signin">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleFormSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					handleInputChange={handleInputChange}
					label="email"
					required
				/>

				<FormInput
					name="password"
					type="password"
					value={password}
					handleInputChange={handleInputChange}
					label="password"
					required
				/>

				<CustomButton type="submit" value="Submit Form">
					Sign In
				</CustomButton>
			</form>
		</div>
	);
};

export default Signin;
