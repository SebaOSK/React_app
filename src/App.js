import './App.css';
import PatientForm from './Form.js';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import GetAll from './GetAll';
import GetById from './GetById';
import Post from './Post';
import Delete from './Delete';
import Update from './Update';

function App() {

  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href="/" className='navbar-brand'>
          PatientsList
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={"/update"} className="nav-link">
              Update
            </Link>
          </li>
        </div>
      </nav>
      <div className='container mt-3'>
        <Routes>
          <Route path="/" element={<GetAll />} />
          <Route path="/add" element={<Post />}/>
          <Route path="/update" element={<Update />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
