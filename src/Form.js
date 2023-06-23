import FormElement from './FormElement';
import Button from './SubmitButton';

export default function PatientForm(props) {
    return (
        <div className="form-container">       
                <FormElement label="First Name: " type="text" name="firstName" value={props.patient.firstName} onChange={props.onChange} />
                <FormElement label="Last Name: " type="text" name="lastName" value={props.patient.lastName} onChange={props.onChange} />
                <FormElement label="Date Of Birth: " type="date" name="DOB" value={props.patient.DOB} onChange={props.onChange} />
                <FormElement label="Phone Number: " type="number" name="phoneNumber" value={props.patient.phoneNumber} onChange={props.onChange} />
                <FormElement label="Emergency Contact:" type="number" name="emergencyContact" value={props.patient.emergencyContact} onChange={props.onChange} />

                <Button className="submit-button" type="submit" onClick={props.onClick} buttontext={props.buttontext}/>
        </div>


    )
}