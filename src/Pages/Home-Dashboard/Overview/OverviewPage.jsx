import React from 'react'
import './OverviewPage.scss'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import Dashboard from '../../../components/Dashboard/Dashboard'
import BarChart from '../../../components/Charts/BarChart'
import PieChart from '../../../components/Charts/PieChart'
import Table from 'react-bootstrap/Table';
import NoAnomaly from '../../../components/NoAnomalyDiv/NoAnomaly'

const OverviewPage = ({ user }) => {
  // const anomalyEvents = [];
  const anomalyEvents = [
    {
      timestamp: '2023-10-17 10:30 AM',
      event: 'Fight Anomaly Detected',
      severity: 'Severe',
      location: 'cam-1'
    },
    {
      timestamp: '2023-10-17 12:45 PM',
      event: 'Fire Anomaly Detected',
      severity: 'Moderate',
      location: 'cam-2'
    },
    {
      timestamp: '2023-10-17 3:15 PM',
      event: 'Accident Anomaly Detected',
      severity: 'Normal',
      location: 'cam-3'
    },
    {
      timestamp: '2023-10-17 10:30 AM',
      event: 'Fight Anomaly Detected',
      severity: 'Severe',
      location: 'cam-1'
    },
    {
      timestamp: '2023-10-17 12:45 PM',
      event: 'Fire Anomaly Detected',
      severity: 'Moderate',
      location: 'cam-2'
    },
    {
      timestamp: '2023-10-17 3:15 PM',
      event: 'Accident Anomaly Detected',
      severity: 'Normal',
      location: 'cam-3'
    },
    {
      timestamp: '2023-10-17 10:30 AM',
      event: 'Fight Anomaly Detected',
      severity: 'Severe',
      location: 'cam-1'
    },
    {
      timestamp: '2023-10-17 12:45 PM',
      event: 'Fire Anomaly Detected',
      severity: 'Moderate',
      location: 'cam-2'
    },
    {
      timestamp: '2023-10-17 3:15 PM',
      event: 'Accident Anomaly Detected',
      severity: 'Normal',
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
          > <i className="fa-solid fa-chart-line"></i>&nbsp; Data Analysis</h3>

          <div className="charts">
            <div className="row">
              <div className='card bar-chart-container'>
                <p>Time based anomaly frequency</p>
                <BarChart />
              </div>

              <div className='card pie-chart-container'>
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
          > <i className="fa-solid fa-calendar-days"></i>&nbsp; Event History</h3>


          <div className="card dark-table-container">
            {
              anomalyEvents.length
                ?
                (
                  <Table variant="dark" className="dark-table">
                    <thead>
                      <tr>
                        <th style={{ background: "#167efc27", padding: 10, color: "var(--white)", border: "1px solid #167efc", borderRight: 'none' }}>Timestamp</th>
                        <th style={{ background: "#167efc27", padding: 10, color: "var(--white)", border: "1px solid #167efc", borderLeft: 'none', borderRight: 'none' }}>Event</th>
                        <th style={{ background: "#167efc27", padding: 10, color: "var(--white)", border: "1px solid #167efc", borderLeft: 'none', borderRight: 'none', textAlign: 'center' }}>Severity</th>
                        <th style={{ background: "#167efc27", padding: 10, color: "var(--white)", border: "1px solid #167efc", borderLeft: 'none', textAlign: 'center' }}>Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {anomalyEvents.map((item, index) => (
                        <tr key={index}>
                          <td style={{ background: "var(--card-color)", color: "var(--light-white)" }}>{item.timestamp}</td>
                          <td style={{ background: "var(--card-color)", color: "var(--light-white)" }}>{item.event}</td>
                          {
                            item.severity === "Severe"
                              ?
                              <td style={{ background: "var(--card-color)", color: "#FF5045", textAlign: 'center' }}>{item.severity}</td>
                              :
                              item.severity === "Moderate"
                                ?
                                <td style={{ background: "var(--card-color)", color: "#FFB545", textAlign: 'center' }}>{item.severity}</td>
                                :
                                <td style={{ background: "var(--card-color)", color: "#00C852", textAlign: 'center' }}>{item.severity}</td>
                          }

                          <td style={{ background: "var(--card-color)", color: "var(--light-white)", textAlign: 'center' }}>{item.location}</td>
                        </tr>
                      ))
                      }
                    </tbody>
                  </Table>
                )
                :
                (
                  <NoAnomaly />
                )
            }
            <div className="pagination-btns">
              <button disabled={true}>
                Prev
              </button>

              <span className='page-number-btn'>1/10</span>

              <button>
                Next
              </button>

              <div className="search-page">
                <form>
                  <input style={{
                    background: "var(--bg-color)",
                    border: "1px solid #656e79",
                    padding: "5px 10px",
                    color: "var(--white)",
                    width: "70%",
                    fontSize: 14,
                    borderRadius: 6
                  }} type="text" placeholder='Go to page...' />
                  <button style={{
                    border: "1px solid var(--border-color)",
                    padding: "5px 10px",
                    fontSize: 14,
                    marginLeft: 5
                  }} type='submit'>GO</button>
                </form>
              </div>
            </div>
            <button className='primary-button all-report-button'>Generate Report</button>
          </div>


        </div>
      </div>


      <Footer />
    </div >
  )
}

export default OverviewPage