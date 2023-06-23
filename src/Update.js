import FormElement from './FormElement';
import PatientForm from './Form';
import PatientTable from './PatientTable';
import SubmitButton from './SubmitButton.js';
import axios from 'axios';
import { useState } from 'react';

export default function Update() {
    // use state for handling get request
    const [id, setId] = useState('');

    const handleChange = (event) => {
        setId(event.target.value);
    };
    // use state for mapping patient info to display in table
    const [patient, setPatient] = useState([]);

    // executing getById request
    const onClick = (event) => {
        event.preventDefault();

        axios.get(`https://localhost:44369/api/Hospital/?Id=${id}`)
            .then(function (response) {
                // handle success
                const mappedPatient = response.data.map((patient) => ({
                    firstName: patient.firstName,
                    lastName: patient.lastName,
                    DOB: patient.dob,
                    phoneNumber: patient.phoneNumber,
                    emergencyContact: patient.emergencyContact,
                }));

                setPatient(mappedPatient);
                console.log(patient);
            });
    }

    const [patientUpdate, setPatientUpdate] = useState({
        firstName: "",
        lastName: "",
        DOB: "",
        phoneNumber: "",
        emergencyContact: ""
    });

    const handleChangeUpdate = (event) => (
        setPatientUpdate({ ...patientUpdate, [event.target.name]: event.target.value })
    );

    const submitUpdate = () => {
        const updatedPatient = { ...patientUpdate };
        for (const key in updatedPatient) {
            console.log(key);
            if(updatedPatient.hasOwnProperty(key) && updatedPatient[key] === "") {
                updatedPatient[key] = null;
            };
            console.log(updatedPatient)
        }
        axios.put(`https://localhost:44369/api/Hospital/?Id=${id}`, updatedPatient)
            .then(function (response) {
                console.log(response)
            })
        console.log(patientUpdate);
        setPatientUpdate({firstName: "", lastName: "", DOB: "", phoneNumber: "", emergencyContact: ""});
    };

    return (
        <div className="update-container">
            <FormElement label="Enter Id:" type="text" name="id" value={id} onChange={handleChange} />
            <SubmitButton className="submit-button" type="submit" onClick={onClick} buttontext="Get Patient" />
            <hr />
            <PatientTable patients={patient} />
            <hr />
            <PatientForm patient={patientUpdate} onChange={handleChangeUpdate} onClick={submitUpdate} buttontext="Update record" />
        </div>

    )
}