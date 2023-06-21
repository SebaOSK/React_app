import FormElement from './FormElement';
import SubmitButton from './SubmitButton';
import { useState } from 'react';
import axios from 'axios';

export default function GetById() {

    const [id, setId] = useState({
        id: ""
    }); 

    const [patients, setPatients] = useState([]);

    const addPatients = (patient) => {
        setPatients([...patients, patient]);
    };

    const handleChange = (event) => {
        setId({...id, [event.target.name]: event.target.value})
    };

    const getAll = (event) => {
        if (event) {
            event.preventDefault();
        }
        axios.get('https://localhost:44369/api/Hospital/?Id=' + id.id)
            .then(function (response) {
                // handle success
                const responseData = response.data;
                addPatients(responseData)
                console.log(responseData)
            });

    };
        
    return (
        <form>
            <FormElement label="Enter Id: " type="text" name="id" value={id.id} onChange={handleChange}/>
            <SubmitButton className="get-id-button" type="submit" onClick={getAll} text="Get Patient"/>
        </form>

    )
}