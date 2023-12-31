import React, { useState } from 'react';
import "./EventsPage.scss";
import Footer from '../../../components/Footer/Footer';
import Navbar from '../../../components/Navbar/Navbar';
import Dashboard from '../../../components/Dashboard/Dashboard';
import Dropdown from 'react-dropdown'; // You need to import a Dropdown component
import 'react-dropdown/style.css'; // Import default styles for the dropdown
import NoAnomaly from '../../../components/NoAnomalyDiv/NoAnomaly';

const EventsPage = ({ user }) => {
  const [filterOption, setFilterOption] = useState('');
  const [severityOption, setSeverityOption] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filterOptions = ['All', 'Fighting', 'Accident', 'Fire'];
  const severityOptions = ['Default', 'Severe', 'Normal', 'Moderate'];
  const sortOptions = ['None', 'Date', 'Time'];

  // const anomalyData = [];
  const anomalyData = [
    {
      id: "SIGHT #12",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Moderate"
    },
    {
      id: "SIGHT #11",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Normal"
    },
    {
      id: "SIGHT #10",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Severe"
    },
    {
      id: "SIGHT #9",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Moderate"
    },
    {
      id: "SIGHT #8",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Moderate"
    },
    {
      id: "SIGHT #7",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Normal"
    },
    {
      id: "SIGHT #6",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Severe"
    },
    {
      id: "SIGHT #5",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Moderate"
    },
    {
      id: "SIGHT #4",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Moderate"
    },
    {
      id: "SIGHT #3",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Moderate"
    },
    {
      id: "SIGHT #2",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Normal"
    },
    {
      id: "SIGHT #1",
      AnomalyType: "Fight Event",
      Timestamp: "10 Oct 2023, 12:30 P.M.",
      EventDuration: "3 Minutes",
      Location: "Camera 1",
      ThreatLevel: "Severe"
    },
  ]

  const isNoAnomaly = (num) => {
    console.log(num);
    if (num == 0) {
      return {
        background: "var(--card-color)"
      };
    }
    return {
      background: "transparent",
      border: 'none'
    };
  }

  const getColor = (ThreatLevel) => {
    if (ThreatLevel === 'Severe') {
      return {
        color: "var(--red)"
      };
    } else if (ThreatLevel === 'Moderate') {
      return {
        color: "var(--orange)"
      };
    } else {
      return {
        color: "var(--green)"
      };
    }
  }

  return (
    <div>
      <Navbar user={user} />
      <Dashboard />
      <div className="events-container">
        <h3
          style={{
            fontSize: 18,
            marginBottom: 20
          }}
        > <i className="fa-solid fa-video"></i> &nbsp; All Anomalies
        </h3>

        <div>
          <form className="event-list-search">
            <div className='search-bar'>
              <input type='text' placeholder='Find an Anomaly with ID ...' />
              <button
                style={{
                  padding: "6px 10px",
                  background: "var(--blue)",
                  border: 'none',
                  color: 'var(--white)',
                  borderRadius: 6
                }}
                type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div className="drop-downs">
              <Dropdown
                options={filterOptions}
                value={filterOption}
                onChange={(option) => setFilterOption(option.value)}
                placeholder="Filter"
              />
              <Dropdown
                options={severityOptions}
                value={severityOption}
                onChange={(option) => setSeverityOption(option.value)}
                placeholder="Severity"
              />
              <Dropdown
                options={sortOptions}
                value={sortOption}
                onChange={(option) => setSortOption(option.value)}
                placeholder="Sort"
              />
            </div>
          </form>
        </div>
        {
          <div className="card anomaly-card-container" style={isNoAnomaly(anomalyData.length)}>
            <div className="anomaly-card-row">
              {
                anomalyData.length
                  ?
                  anomalyData.map((anomaly, index) => (
                    <div key={index} className="card anomaly-card" >
                      <h4>ID: {anomaly.id}</h4>
                      <div className="anomaly-card-description">
                        <h6 >Description</h6>
                        <p><span>• Anomaly Type:</span>  {anomaly.AnomalyType}</p>
                        <p><span>• Timestamp:</span>  {anomaly.Timestamp}</p>
                        <p><span>• Event Duration:</span>  {anomaly.EventDuration}</p>
                        <p><span>• Location:</span>  {anomaly.Location}</p>
                        <p><span>• Threat Level:</span> <span style={getColor(anomaly.ThreatLevel)}>{anomaly.ThreatLevel}</span> </p>
                      </div>

                      <div className="buttons">
                        <button className='primary-button anomaly-report-btn' >Generate Report</button>
                        <button className='border-button download-video-btn' >Download Video</button>
                      </div>
                    </div>
                  ))
                  :
                  (
                    <div style={{
                      background: "var(--card-color)",
                      width: "80vw",
                      height: "300px",
                    }}>
                      <NoAnomaly />
                    </div>
                  )
              }
            </div>
          </div>
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

      </div>
      <Footer />
    </div>
  )
}

export default EventsPage;
