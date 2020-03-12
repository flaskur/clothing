import React from 'react';
import './Signin.scss';
import FormInput from '../form_input/FormInput';
import CustomButton from '../custom_button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase';

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

				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					{/* isGoogleSignIn is default True */}
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						{' '}
						Sign In With Google{' '}
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default Signin;
