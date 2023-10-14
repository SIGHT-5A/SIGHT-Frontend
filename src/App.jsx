import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignUpPage from "./Pages/LoginPage/LoginSignUpPage"
import OverviewPage from "./Pages/Home-Dashboard/Overview/OverviewPage";
import NotFoundPage from "./Pages/404/NotFoundPage";
import EventsPage from "./Pages/Home-Dashboard/Events/EventsPage";
import AnalyzerPage from "./Pages/Home-Dashboard/Analyzer/AnalyzerPage";
import LiveRecordingPage from "./Pages/Home-Dashboard/LiveRecording/LiveRecordingPage";
import AllNotifications from "./Pages/Notifications/AllNotifications";
import SettingsPage from "./Pages/Settings/SettingsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignUpPage />} />
          <Route path="/home/overview" element={<OverviewPage />} />
          <Route path="/home/events" element={<EventsPage />} />
          <Route path="/home/analyzer" element={<AnalyzerPage />} />
          <Route path="/home/live" element={<LiveRecordingPage />} />
          <Route path="/notifications" element={<AllNotifications />} />
          <Route path="/settings" element={<SettingsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
