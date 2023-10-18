import React from 'react'
import './OverviewPage.scss'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import Dashboard from '../../../components/Dashboard/Dashboard'
import BarChart from '../../../components/Charts/BarChart'
import PieChart from '../../../components/Charts/PieChart'
const OverviewPage = ({ user }) => {
  return (
    <div className='overview-main-container' style={{
      height: "100vh",
      width: "100vw",
      marginBottom: '80px'
    }}>
      <Navbar user={user} />
      <Dashboard />
      <div className="overview-container">
        <div className="chart-container">
          <h3
            style={{
              fontSize: 18,
              marginBottom: 20
            }}
          > <i class="fa-solid fa-chart-line"></i> Data Analysis</h3>

          <div className="charts">
            <div className="row">
              <div className='bar-chart-container'>
                <p>Time based anomaly frequency</p>
                <BarChart />
              </div>

              <div className='pie-chart-container'>
                <p>Severity Frequency</p>
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default OverviewPage