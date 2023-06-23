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
                const mappedPatients = response.data.data.map((patient, index) => ({
                  firstName: patient.firstName,
                  lastName: patient.lastName,
                  DOB: patient.dob,
                  phoneNumber: patient.phoneNumber,
                  emergencyContact: patient.emergencyContact,
                  index: index,
                }));
                setPatients(mappedPatients);
                console.log(mappedPatients);
                console.log(patients);
            });

    };

    return (
        <div className="getall-container">
            <SubmitButton className="submit-button" type="submit" onClick={getAll} buttontext="GetAll" />
            {patients.length > 0 ? (
                <PatientTable patients={patients} />
            ) : (
                <p>No patients found.</p>
            )}
        </div>

    )

}