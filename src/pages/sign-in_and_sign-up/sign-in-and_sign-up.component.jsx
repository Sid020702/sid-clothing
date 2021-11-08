import React from 'react';
import { SignInAndSignUpComponent } from './sign-in-and_sign-up.styles';
import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.components';
const SignInAndSignUpPage = () => (
    <SignInAndSignUpComponent>
        <SignIn />
        <SignUp />
    </SignInAndSignUpComponent>
)

export default SignInAndSignUpPage;