import FormElement from './FormElement';
import './PatientForm.css';
import Button from './SubmitButton';

export default function PatientForm(props) {
    return (
        <div className="form-container">       
                <FormElement label="First Name: " type="text" name="FirstName" value={props.patient.FirstName} onChange={props.onChange} />
                <FormElement label="Last Name: " type="text" name="LastName" value={props.patient.LastName} onChange={props.onChange} />
                <FormElement label="Date Of Birth: " type="date" name="DOB" value={props.patient.DOB} onChange={props.onChange} />
                <FormElement label="Phone Number: " type="number" name="PhoneNumber" value={props.patient.PhoneNumber} onChange={props.onChange} />
                <FormElement label="Emergency Contact:" type="number" name="EmergencyContact" value={props.patient.EmergencyContact} onChange={props.onChange} />

                <Button className="submit-button" type="submit" onClick={props.onClick} text="Save"/>
        </div>


    )
}