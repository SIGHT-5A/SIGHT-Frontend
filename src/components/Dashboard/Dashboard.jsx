import React from 'react'
import './Dashboard.scss'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='main-dashboard'>
            <h3>Main Dashboard</h3>
            <div className="dashboard-navigation">
                <ul className='main-dashboard-items'>
                    <NavLink to='/home/overview'><li>Overview</li></NavLink>
                    <NavLink to='/home/events'><li>Events</li></NavLink>
                    <NavLink to='/home/live'><li>Monitor</li></NavLink>
                    <NavLink to='/home/analyzer'><li>Analyzer</li></NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard
