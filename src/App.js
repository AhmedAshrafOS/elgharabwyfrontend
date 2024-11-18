import './App.css';


import HomePage from './components/HomePage';
import BlogPage from './components/blog/BlogPage';
import BlogDetailPage from './components/blog/BlogDetailPage';

import AdminLogin from './components/dashboard/AdminLogin';
import Dashboard from './components/dashboard/Dashboard'; 
import ProtectedRoute from './components/dashboard/ProtectedRoute';

import BookingAppointment from "./components/BookingAppointment";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <Router>
      
    <Routes>
      
      <Route path="/" element={<HomePage/>} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetailPage />} />
      <Route path="/booking-appointment" element={<BookingAppointment />} />
     


       <Route path="/admin" element={<AdminLogin />} />

       <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          
        />
    </Routes>
  </Router>
  

  );
}

export default App;
