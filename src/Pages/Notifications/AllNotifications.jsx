import React from 'react'
import "./AllNotifications.scss"
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const AllNotifications = ({ user }) => {
  return (
    <div className='all-notification-container'>
      <Navbar user={user} />
      AllNotifications
      <Footer />
    </div>
  )
}

export default AllNotifications