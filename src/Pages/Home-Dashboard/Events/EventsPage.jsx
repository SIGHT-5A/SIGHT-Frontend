import React from 'react'
import "./EventsPage.scss"
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import Dashboard from '../../../components/Dashboard/Dashboard'

const EventsPage = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <Dashboard />
      EventsPage
      <Footer />
    </div>
  )
}

export default EventsPage