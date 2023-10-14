import React, { useState } from 'react'
import "./Navbar.scss"
import logo from "../../assets/logo.webp"
import defaultProfile from "../../assets/default-profile.webp"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Dropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [uncheckedNotifications, setUncheckedNotifications] = useState(10);

    return (
        <div className='my-navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
                <h2>SIGHT™️</h2>
            </div>
            <div className='nav-utils'>
                <Tippy content={<span>Home</span>} delay={300}>
                    <Link to="/home/overview">
                        <i className="fa-solid fa-house outer-fa"></i>
                    </Link>
                </Tippy>
                <Tippy content={<span>Settings</span>} delay={300}>
                    <Link to="/settings">
                        <i className="fa-solid fa-gear outer-fa"></i>
                    </Link>
                </Tippy>
                <div className="notification">
                    {
                        uncheckedNotifications === 0
                            ?
                            <></>
                            :
                            <p className='notification-number'></p>
                    }
                    <Tippy content={<span>Notifications</span>} delay={300}>
                        <Link to="/notifications">
                            <i className="fa-solid fa-bell outer-fa"></i>
                        </Link>
                    </Tippy>
                </div>
                <Dropdown>
                    <Dropdown.Toggle style={{ margin: 6, background: "transparent", paddingLeft: 10, paddingRight: 10, paddingTop: 2, paddingBottom: 2 }} variant="dark">
                        <Image className='user-avatar' src={defaultProfile} roundedCircle />
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ textAlign: 'left', background: "#161b22 !important" }} variant="dark" align="right">
                        <Dropdown.Header style={{ fontWeight: 600, fontSize: 15, color: "white" }}>My Profile</Dropdown.Header>
                        <Dropdown.Divider style={{ borderTopColor: "grey" }} />
                        <Dropdown.Item href="/settings"><i className="fa-solid fa-regular fa-user inner-fa"></i>Manage Profile</Dropdown.Item>
                        <Dropdown.Item href="/"><i class="fa-solid fa-arrow-right-from-bracket inner-fa"></i>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Navbar
