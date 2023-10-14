import React from 'react'
import logo from "../../assets/logo.webp"
import { Link } from 'react-router-dom';
import "./NotFoundPage.scss"
import Footer from '../../components/Footer/Footer';

const NotFoundPage = () => {
    return (
        <>
            <div className='notfound-page'>
                <div className='f404'>
                    <h1 className='four'>4</h1>
                    <img src={logo} alt="img" />
                    <h1 className='four'>4</h1>
                </div>
                <p>
                    The page you were looking for does not exist. You may have
                    mistyped the address or the page may have moved.
                </p>
                <Link to="/" className='primary-button home-btn'>Back to Home</Link>
            </div>
            <Footer />
        </>
    )
}

export default NotFoundPage