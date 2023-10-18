import React from 'react'
import './OverviewPage.scss'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import Dashboard from '../../../components/Dashboard/Dashboard'
import BarChart from '../../../components/Charts/BarChart'
import PieChart from '../../../components/Charts/PieChart'
import Table from 'react-bootstrap/Table';

const OverviewPage = ({ user }) => {
  const anomalyEvents = [
    {
      timestamp: '2023-10-17 10:30 AM',
      event: 'Fight Anomaly Detected',
      severity: 'High',
      location: 'cam-1'
    },
    {
      timestamp: '2023-10-17 12:45 PM',
      event: 'Fire Anomaly Detected',
      severity: 'Medium',
      location: 'cam-2'
    },
    {
      timestamp: '2023-10-17 3:15 PM',
      event: 'Accident Anomaly Detected',
      severity: 'Low',
      location: 'cam-3'
    },
    {
      timestamp: '2023-10-17 10:30 AM',
      event: 'Fight Anomaly Detected',
      severity: 'High',
      location: 'cam-1'
    },
    {
      timestamp: '2023-10-17 12:45 PM',
      event: 'Fire Anomaly Detected',
      severity: 'Medium',
      location: 'cam-2'
    },
    {
      timestamp: '2023-10-17 3:15 PM',
      event: 'Accident Anomaly Detected',
      severity: 'Low',
      location: 'cam-3'
    },
    {
      timestamp: '2023-10-17 10:30 AM',
      event: 'Fight Anomaly Detected',
      severity: 'High',
      location: 'cam-1'
    },
    {
      timestamp: '2023-10-17 12:45 PM',
      event: 'Fire Anomaly Detected',
      severity: 'Medium',
      location: 'cam-2'
    },
    {
      timestamp: '2023-10-17 3:15 PM',
      event: 'Accident Anomaly Detected',
      severity: 'Low',
      location: 'cam-3'
    },
  ];

  return (
    <div className='below-dashboard-main-container'>
      <Navbar user={user} />
      <Dashboard />
      <div className="overview-container">
        <div className="overview-section chart-container">
          <h3
            style={{
              fontSize: 18,
              marginBottom: 20
            }}
          > <i className="fa-solid fa-chart-line"></i> Data Analysis</h3>

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

        <div style={{
          marginTop: "30px"
        }} className="overview-section">
          <h3
            style={{
              fontSize: 18,
              marginBottom: 20
            }}
          > <i className="fa-solid fa-calendar-days"></i> Event History</h3>


          <div className="dark-table-container">

            <Table bordered striped variant="dark" className="dark-table">
              <thead>
                <tr>
                  <th style={{ background: "#121316" }}>Timestamp</th>
                  <th style={{ background: "#121316" }}>Event</th>
                  <th style={{ background: "#121316" }}>Severity</th>
                  <th style={{ background: "#121316" }}>Location</th>
                </tr>
              </thead>
              <tbody>
                {anomalyEvents.map((item, index) => (
                  <tr key={index}>
                    <td style={{ background: "var(--card-color)" }}>{item.timestamp}</td>
                    <td style={{ background: "var(--card-color)" }}>{item.event}</td>
                    {
                      item.severity === "High"
                        ?
                        <td style={{ background: "var(--card-color)", color: "#FF5045" }}>{item.severity}</td>
                        :
                        item.severity === "Medium"
                          ?
                          <td style={{ background: "var(--card-color)", color: "#FFB545" }}>{item.severity}</td>
                          :
                          <td style={{ background: "var(--card-color)", color: "#00C852" }}>{item.severity}</td>
                    }

                    <td style={{ background: "var(--card-color)" }}>{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="pagination-btns">
              <button disabled={true}>
                <i class="fa-solid fa-backward"></i>
              </button>

              <button className='page-number-btn'>1</button>

              <button>
                <i class="fa-solid fa-forward"></i>
              </button>
            </div>
            <button className='primary-button all-report-button'>Generate Report</button>
          </div>


        </div>
      </div>


      <Footer />
    </div>
  )
}

export default OverviewPage