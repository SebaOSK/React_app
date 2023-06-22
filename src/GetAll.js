import axios from 'axios';
import SubmitButton from './SubmitButton.js';
import { useState, useEffect } from 'react'
import PatientTable from './PatientTable.js'

export default function GetAll() {

    const [patients, setPatients] = useState([]);



    const getAll = (event) => {
        if (event) {
            event.preventDefault();
        }
        axios.get('https://localhost:44369/api/Hospital')
            .then(function (response) {
                // handle success
                const responseData = response.data.data;
                
                const mappedPatients = responseData.map((patient) => ({
                  FirstName: patient.firstName,
                  LastName: patient.lastName,
                  DOB: patient.dob,
                  PhoneNumber: patient.phoneNumber,
                  EmergencyContact: patient.emergencyContact,
                }));
                setPatients(mappedPatients);
            });

    };

    return (
        <div className="getall-container">
            <SubmitButton className="get-all-button" type="submit" onClick={getAll} text="GetAll" />
            {patients.length > 0 ? (
                <PatientTable patients={patients} />
            ) : (
                <p>No patients found.</p>
            )}
        </div>

    )

}