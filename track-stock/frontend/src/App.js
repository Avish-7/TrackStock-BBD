import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './Components/Auth/SignUp';
import LogIn from './Components/Auth/LogIn';
import Layout from "./Components/Dashboards/Layout"; 
import AdminDashboard from "./Components/Dashboards/AdminDashboard";
import RepDashboard from './Components/Dashboards/RepDashboard';
import SignUp2 from './Components/Auth/SignUp2';

function App() {
    return (
        <Router>
        <Routes>
          {/* Auth Pages (Without Side menu) */}
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
  
          {/* Main Layout (With Side menu) */}
          <Route element={<Layout />}>
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/repdashboard" element={<RepDashboard />} />
          </Route>
        </Routes>
      </Router>
    );
}

export default App;
