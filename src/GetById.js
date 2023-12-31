import FormElement from './FormElement';
import SubmitButton from './SubmitButton';
import PatientTable from './PatientTable';
import { useState } from 'react';
import axios from 'axios';

export default function GetById() {

    const [id, setId] = useState('');

    const [patient, setPatient] = useState([]);

    const handleChange = (event) => setId(event.target.value);

    const getById = (event) => {
        if (event) {
            event.preventDefault();
        }
        axios.get(`https://localhost:44369/api/Hospital/?Id=${id}`)
            .then(function (response) {
                // handle success
                const responseData = response.data;
                const mappedPatient = responseData.map((patient, index) => ({
                    firstName: patient.firstName,
                    lastName: patient.lastName,
                    DOB: patient.dob,
                    phoneNumber: patient.phoneNumber,
                    emergencyContact: patient.emergencyContact,
                    index: index,
                }));
                setPatient(mappedPatient);
            });

    };

    return (
        <form>
            <FormElement label="Enter Id: " type="text" name="id" value={id} handleChange={handleChange} />
            <SubmitButton className="submit-button" type="submit" onClick={getById} buttontext="Get Patient" />
            <PatientTable patients={patient} />
        </form>

    )
}