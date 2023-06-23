import './App.css';
import PatientForm from './Form.js';
import PatientTable from './PatientTable'
import { useState } from 'react';
import axios from 'axios';
import GetAll from './GetAll';
import GetById from './GetById';
import Post from './Post';
import Delete from './Delete';
import Update from './Update';

function App() {

  return (
    <div className="App">
      <h3>Get all patients: </h3>
      <GetAll />
      <hr />
      <h3>Get patient by ID: </h3>
      <GetById />
      <hr />
      <h3>Add patient: </h3>
      <Post />
      <hr />
      <h3>Update patient entry: </h3>
      <Update />
      <hr />
      <h3>Delete patient: </h3>
      <Delete />
    </div>
  );
}

export default App;
