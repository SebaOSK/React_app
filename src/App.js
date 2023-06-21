import './App.css';
import PatientForm from './Form.js';
import PatientTable from './PatientTable'
import { useState } from 'react';
import axios from 'axios';
import GetAll from './GetAll';

function App() {

  const [patient, setPatient] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    phonenumber: "",
    emergencycontact: ""
  });

  const [patients, setPatients] = useState([]);

  const handleChange = (event) => {
    setPatient({ ...patient, [event.target.name]: event.target.value });
  };

  const addPatients = (patient) => {
    setPatients([...patients, patient]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPatients(patient);
    console.log(patient);

    setPatient({firstname: "", lastname: "", dateofbirth: "", phonenumber: "", emergencycontact: ""});
  };
  

  return (
    <div className="App">
      <PatientForm patient={patient} onChange={handleChange} onClick={handleSubmit} />
      <PatientTable patients={patients} />
      <GetAll />
    </div>
  );
}

export default App;
