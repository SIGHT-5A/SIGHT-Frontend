import React from 'react'
import "./LoginSignUpPage.scss"
import LoginSignUpHeader from '../components/LoginSignUpHeader/LoginSignUpHeader'
import LoginSignUpBody from '../components/LoginSignUpBody/LoginSignUpBody'
import LoginSignUpFooter from '../components/LoginSignUpFooter/LoginSignUpFooter'

const LoginSignUpPage = () => {
    return (
        <div className='Login-SignUp-Page-Container'>
            <LoginSignUpHeader />
            <LoginSignUpBody />
            <LoginSignUpFooter />
        </div>
    )
}

export default LoginSignUpPage