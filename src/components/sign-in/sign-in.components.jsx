import React from 'react';
import { SignInComponent, ButtonsComponent } from './sign-in.styles';
import { TitleComponent } from '../menu-item/menu-item.styles';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <SignInComponent>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' value={this.state.email}
                        handleChange={this.handleChange}
                        name='email'
                        label='email' required />


                    <FormInput type='password' value={this.state.password}
                        handleChange={this.handleChange}
                        name='password'
                        label='password' required />
                    <ButtonsComponent>

                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </ButtonsComponent>
                </form>
            </SignInComponent>
        )
    }
}


export default SignIn;