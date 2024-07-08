import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Navbar from './component/navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from './component/Register';

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/logout" element={<h1>Logout</h1>}/>

      </Routes>
    </Router>
  </div>
)


