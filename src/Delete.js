import FormElement from './FormElement';
import SubmitButton from './SubmitButton';
import PatientTable from './PatientTable';
import { useState } from 'react';
import axios from 'axios';

export default function GetById() {

    const [id, setId] = useState({
        id: ""
    });

    const [patients, setPatients] = useState([]);

    const handleChange = (event) => {
        setId({ ...id, [event.target.name]: event.target.value })
    };

    const deletePatient = (event) => {
        if (event) {
            event.preventDefault();
        }
        try {
            axios.get(`https://localhost:44369/api/Hospital/?Id=${id.id}`)
                .then(function (response) {
                    // handle success
                    const responseData = response.data;
                    const mappedPatients = responseData.map((patient) => ({
                        FirstName: patient.firstName,
                        LastName: patient.lastName,
                        DOB: patient.dob,
                        PhoneNumber: patient.phoneNumber,
                        EmergencyContact: patient.emergencyContact,

                    }));

                    setPatients(mappedPatients);
                    console.log(patients);

                    axios.delete(`https://localhost:44369/api/Hospital/?Id=${id.id}`)
                        .then(function (response) {
                            // handle success
                            console.log(response)
                        });

                })
        } catch (error) {
            console.log(error.message);
        }
    }



    return (
        <form>
            <FormElement label="Enter Id: " type="text" name="id" value={id.id} onChange={handleChange} />
            <SubmitButton className="get-id-button" type="submit" onClick={deletePatient} text="Delete Patient" />
            <PatientTable patients={patients} />
        </form>

    )
}