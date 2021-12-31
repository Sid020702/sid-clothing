import React from 'react';
import { SignInComponent, ButtonsComponent } from './sign-in.styles';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { emailSignInStart } from '../../redux/user/user.actions';
import { googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { useState } from 'react';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

    const { email, password } = userCredentials;


    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password)
    }

    const handleChange = event => {
        const { value, name } = event.target
        setUserCredentials({ ...userCredentials, [name]: value })
    }



    return (
        <SignInComponent>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type='email' value={email}
                    handleChange={handleChange}
                    name='email'
                    label='email' required />


                <FormInput type='password' value={password}
                    handleChange={handleChange}
                    name='password'
                    label='password' required />
                <ButtonsComponent>

                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                </ButtonsComponent>
            </form>
        </SignInComponent>
    )
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({
        email,
        password
    }))
})


export default connect(null, mapDispatchToProps)(SignIn);