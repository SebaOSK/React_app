import axios from 'axios';
import { useState, useEffect } from 'react'
import PatientTable from './PatientTable.js'

export default function GetAll() {

    const [patients, setPatients] = useState([]);

    const getAllPatients = (event) => {
        if (event) {
            event.preventDefault();
        };
        getAll();
    };

    const getAll = () => {
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
            });
    };

    useEffect(() => { getAllPatients(); }, []);

    return (
        <div className="getall-container">

            {patients.length > 0 ? (
                <PatientTable patients={patients} />
            ) : (
                <p>No patients found.</p>
            )}
        </div>

    )

};