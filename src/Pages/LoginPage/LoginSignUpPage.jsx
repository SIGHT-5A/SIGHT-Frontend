import React from 'react'
import "./LoginSignUpPage.scss"
import LoginSignUpHeader from '../../components/LoginSignUpHeader/LoginSignUpHeader'
import LoginSignUpBody from '../../components/LoginSignUpBody/LoginSignUpBody'
import Footer from '../../components/Footer/Footer'

const LoginSignUpPage = () => {
    return (
        <div className='Login-SignUp-Page-Container'>
            <LoginSignUpHeader />
            <LoginSignUpBody />
            <Footer />
        </div>
    )
}

export default LoginSignUpPage