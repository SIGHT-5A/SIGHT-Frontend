import React, { useState } from 'react';
import "./EventsPage.scss";
import Footer from '../../../components/Footer/Footer';
import Navbar from '../../../components/Navbar/Navbar';
import Dashboard from '../../../components/Dashboard/Dashboard';
import Dropdown from 'react-dropdown'; // You need to import a Dropdown component
import 'react-dropdown/style.css'; // Import default styles for the dropdown

const EventsPage = ({ user }) => {
  const [filterOption, setFilterOption] = useState('');
  const [severityOption, setSeverityOption] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filterOptions = ['All', 'Fighting', 'Accident', 'Fire'];
  const severityOptions = ['Default', 'Severe', 'Normal', 'Moderate'];
  const sortOptions = ['None', 'Date', 'Time'];

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
      </div>
      <Footer />
    </div>
  )
}

export default EventsPage;
