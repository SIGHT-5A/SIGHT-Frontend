import React from 'react'
import './AnalyzerPage.scss'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import Dashboard from '../../../components/Dashboard/Dashboard'

const AnalyzerPage = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <Dashboard />
      Analyzer
      <Footer />
    </div>
  )
}

export default AnalyzerPage