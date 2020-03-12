import React from 'react';
import FormInput from '../form_input/FormInput';
import CustomButton from '../custom_button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import './Signup.scss';

const Signup = function() {
	const [ displayName, setDisplayName ] = React.useState('');
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ confirmPassword, setConfirmPassword ] = React.useState('');

	const handleSubmit = async function(event) {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });

			setDisplayName('');
			setEmail('');
			setPassword('');
			setConfirmPassword('');
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = function(event) {
		const { name, value } = event.target;

		if (name === 'displayName') setDisplayName(value);
		if (name === 'email') setEmail(value);
		if (name === 'password') setPassword(value);
		if (name === 'confirmPassword') setConfirmPassword(value);
	};

	return (
		<div className="sign_up">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

export default Signup;
