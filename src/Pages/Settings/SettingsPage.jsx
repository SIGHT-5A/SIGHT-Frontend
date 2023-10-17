import React from 'react'
import './SettingsPage.scss'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const SettingsPage = ({ user }) => {
  return (
    <div className='settings-page-container'>
      <Navbar user={user} />
      SettingsPage
      <Footer />
    </div>
  )
}

export default SettingsPage