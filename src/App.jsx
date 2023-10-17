import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginSignUpPage from "./Pages/LoginPage/LoginSignUpPage"
import OverviewPage from "./Pages/Home-Dashboard/Overview/OverviewPage";
import NotFoundPage from "./Pages/404/NotFoundPage";
import EventsPage from "./Pages/Home-Dashboard/Events/EventsPage";
import AnalyzerPage from "./Pages/Home-Dashboard/Analyzer/AnalyzerPage";
import LiveRecordingPage from "./Pages/Home-Dashboard/LiveRecording/LiveRecordingPage";
import AllNotifications from "./Pages/Notifications/AllNotifications";
import SettingsPage from "./Pages/Settings/SettingsPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home/overview" /> : <LoginSignUpPage onLogin={handleLogin} />} />
          <Route path="/home/overview" element={user ? <OverviewPage user={user} /> : <Navigate to="/" />} />
          <Route path="/home/events" element={user ? <EventsPage user={user} /> : <Navigate to="/" />} />
          <Route path="/home/analyzer" element={user ? <AnalyzerPage user={user} /> : <Navigate to="/" />} />
          <Route path="/home/live" element={user ? <LiveRecordingPage user={user} /> : <Navigate to="/" />} />
          <Route path="/notifications" element={user ? <AllNotifications user={user} /> : <Navigate to="/" />} />
          <Route path="/settings" element={user ? <SettingsPage user={user} /> : <Navigate to="/" />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
