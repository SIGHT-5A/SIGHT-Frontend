import React from 'react'
import './OverviewPage.scss'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import Dashboard from '../../../components/Dashboard/Dashboard'
const OverviewPage = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Navbar />
      <Dashboard />
      Overview
      <Footer />
    </div>
  )
}

export default OverviewPage