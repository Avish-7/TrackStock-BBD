import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './Components/Auth/SignUp';
import LogIn from './Components/Auth/LogIn';

function App() {
    return (
        <Router>
            <Routes>  
                <Route path="/" element={<Navigate to="/signup" />} />  {/* Redirect to SignUp as default */}
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
