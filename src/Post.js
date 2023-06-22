import PatientForm from './Form.js';
import PatientTable from './PatientTable'
import { useState } from 'react';
import axios from 'axios';

function Post() {

    const [patient, setPatient] = useState({
      FirstName: "",
      LastName: "",
      DOB: "",
      PhoneNumber: "",
      EmergencyContact: ""
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

      axios.post('https://localhost:44369/api/Hospital', patient)
      .then((response) => {
        //addPatients(patient);
       console.log(response);
      })
      addPatients(patient);
      console.log(patients);
  
      setPatient({FirstName: "", LastName: "", DOB: "", PhoneNumber: "", EmergencyContact: ""});
    };
    
  
    return (
      <div className="App">
        <PatientForm patient={patient} onChange={handleChange} onClick={handleSubmit} />
        <PatientTable patients={patients} />
      </div>
    );
  }
  
  export default Post;