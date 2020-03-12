import React from 'react';
import './SigninPage.scss';
import Signin from '../../components/signin/Signin';
import Signup from '../../components/signup/Signup';

const SigninPage = function() {
	return (
		<div className="signinpage">
			<Signin />
			<Signup />
		</div>
	);
};

export default SigninPage;
