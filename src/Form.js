import FormElement from './FormElement';
import './PatientForm.css';
import Button from './SubmitButton';

export default function PatientForm(props) {
    return (
        <div className="form-container">       
                <FormElement label="First Name: " type="text" name="firstname" value={props.patient.firstname} onChange={props.onChange} />
                <FormElement label="Last Name: " type="text" name="lastname" value={props.patient.lastname} onChange={props.onChange} />
                <FormElement label="Date Of Birth: " type="date" name="dateofbirth" value={props.patient.dateofbirth} onChange={props.onChange} />
                <FormElement label="Phone Number: " type="number" name="phonenumber" value={props.patient.phonenumber} onChange={props.onChange} />
                <FormElement label="Emergency Contact:" type="number" name="emergencycontact" value={props.patient.emergencycontact} onChange={props.onChange} />

                <Button className="submit-button" type="submit" onClick={props.onClick} />
        </div>


    )
}