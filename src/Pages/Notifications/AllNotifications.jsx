import React from 'react'
import "./AllNotifications.scss"
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Notification from '../../components/Notification/Notification'

const AllNotifications = ({ user }) => {
  const notifications = [
    {
      id: "SIGHT #1",
      type: 'fight',
      event: "Fight Anomaly Detected",
      severity: "Severe",
      location: "cam-1",
      timestamp: "10 oct 2023, 11:00 PM",
      videoId: "hwubdwbuehiwxueihewdiu",
      isRead: false,
    },
    {
      id: "SIGHT #2",
      type: 'fight',
      event: "Fight Anomaly Detected",
      severity: "Normal",
      location: "cam-2",
      timestamp: "10 oct 2023, 11:00 PM",
      videoId: "hwubdwbuehiwxueihewdiu",
      isRead: false,
    },
    {
      id: "SIGHT #3",
      type: 'fight',
      event: "Fight Anomaly Detected",
      severity: "Moderate",
      location: "cam-1",
      timestamp: "10 oct 2023, 11:00 PM",
      videoId: "hwubdwbuehiwxueihewdiu",
      isRead: false,
    },
    {
      id: "SIGHT #4",
      type: 'accident',
      event: "Accident Anomaly Detected",
      severity: "Severe",
      location: "cam-1",
      timestamp: "10 oct 2023, 11:00 PM",
      videoId: "hwubdwbuehiwxueihewdiu",
      isRead: true,
    },
    {
      id: "SIGHT #5",
      type: 'accident',
      event: "Accident Anomaly Detected",
      severity: "Normal",
      location: "cam-2",
      timestamp: "10 oct 2023, 11:00 PM",
      videoId: "hwubdwbuehiwxueihewdiu",
      isRead: true,
    },
    {
      id: "Accident #6",
      type: 'accident',
      event: "Accident Anomaly Detected",
      severity: "Moderate",
      location: "cam-1",
      timestamp: "10 oct 2023, 11:00 PM",
      videoId: "hwubdwbuehiwxueihewdiu",
      isRead: true,
    },
    {
      id: "SIGHT #7",
      type: 'fire',
      event: "Fire Anomaly Detected",
      severity: "Severe",
      location: "cam-1",
      timestamp: "10 oct 2023, 11:00 PM",
      videoId: "hwubdwbuehiwxueihewdiu",
      isRead: false,
    },
    {
      id: "SIGHT #8",
      type: 'fire',
      event: "Fire Anomaly Detected",
      severity: "Normal",
      location: "cam-2",
      timestamp: "10 oct 2023, 11:00 PM",
      videoId: "hwubdwbuehiwxueihewdiu",
      isRead: true,
    },
    {
      id: "Accident #9",
      type: 'fire',
      event: "Fire Anomaly Detected",
      severity: "Moderate",
      location: "cam-1",
      timestamp: "10 oct 2023, 11:00 PM",
      videoId: "hwubdwbuehiwxueihewdiu",
      isRead: true,
    },
  ];
  return (
    <div className='all-notification-container'>
      <Navbar user={user} />
      <div className="notification-container">
        <div className="card notificationBox">
          <div className="box-title">
            <h6 style={{
              margin: 0
            }}>All Notifications</h6>
          </div>

          <div className="notifications">
            {
              notifications.length
                ?
                notifications.map((notification, id) => (
                  <Notification key={id} notification={notification} />
                ))
                :
                (
                  <div className='no-notification'>
                    <p>No Notification Received Yet!</p>
                  </div>
                )
            }
          </div>

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
      </div>
      <Footer />
    </div>
  )
}

export default AllNotifications