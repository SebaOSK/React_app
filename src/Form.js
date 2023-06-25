import FormElement from './FormElement';
import Button from './SubmitButton';

export default function PatientForm({patient, onClick, handleChange, buttontext}) {
    return (
        <div className="form-container">       
                <FormElement label="First Name: " type="text" name="firstName" value={patient.firstName} handleChange={handleChange} />
                <FormElement label="Last Name: " type="text" name="lastName" value={patient.lastName} handleChange={handleChange} />
                <FormElement label="Date Of Birth: " type="date" name="DOB" value={patient.DOB} handleChange={handleChange} />
                <FormElement label="Phone Number: " type="number" name="phoneNumber" value={patient.phoneNumber} handleChange={handleChange} />
                <FormElement label="Emergency Contact:" type="number" name="emergencyContact" value={patient.emergencyContact} handleChange={handleChange} />

                <Button className="submit-button" type="submit" onClick={onClick} buttontext={buttontext}/>
        </div>


    )
}