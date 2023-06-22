import './App.css';
import PatientForm from './Form.js';
import PatientTable from './PatientTable'
import { useState } from 'react';
import axios from 'axios';
import GetAll from './GetAll';
import GetById from './GetById';
import Post from './Post';

function App() {

  return (
    <div className="App">
      <GetAll />
      <GetById />
      <Post />
    </div>
  );
}

export default App;
