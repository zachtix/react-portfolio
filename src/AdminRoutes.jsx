import { HashRouter, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import Login from './pages/Login'
import Admin from './pages/Admin'
function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AdminRoutes
