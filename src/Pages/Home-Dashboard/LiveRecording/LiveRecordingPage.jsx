import React from 'react'
import './LiveRecordingPage.scss'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import Dashboard from '../../../components/Dashboard/Dashboard'

const LiveRecordingPage = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <Dashboard />
      LiveRecordingPage
      <Footer />
    </div>
  )
}

export default LiveRecordingPage