
export default function PatientRow({patient}) {
    
    return (
        <tr>
        <td>{patient.firstname}</td>
        <td>{patient.lastname}</td>
        <td>{patient.dateofbirth}</td>
        <td>{patient.phonenumber}</td>
        <td>{patient.emergencycontact}</td>
        </tr>
    );
}