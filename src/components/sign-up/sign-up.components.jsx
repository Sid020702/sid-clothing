import React from 'react'
import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.components'
import { SignUpComponent } from './sign-up.styles'
import { TitleComponent } from '../menu-item/menu-item.styles'
import { signUpStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'
import { useState } from 'react'


const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState(({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }))

    const { displayName, email, password, confirmPassword } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return
        }

        await signUpStart({ displayName, email, password });



        setUserCredentials({

            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''

        })

    }


    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }


    return (
        <SignUpComponent>
            <TitleComponent style={{ margin: `10px 0px` }}>I do not have a account</TitleComponent>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Name"
                    required
                />
                <FormInput type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />

                <CustomButton type="submit" >SIGN UP</CustomButton>

            </form>
        </SignUpComponent>
    )

}

const mapDispatchToProps = dispatch => ({
    signUpStart: (data) => dispatch(signUpStart(data))
})


export default connect(null, mapDispatchToProps)(SignUp);