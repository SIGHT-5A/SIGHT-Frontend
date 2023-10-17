import React from 'react'
import './OverviewPage.scss'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import Dashboard from '../../../components/Dashboard/Dashboard'
const OverviewPage = ({ user }) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Navbar user={user} />
      <Dashboard />
      Overview
      <Footer />
    </div>
  )
}

export default OverviewPage