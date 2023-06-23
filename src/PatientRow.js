
export default function PatientRow({patient}) {
    
    return (
        <tr>
        <td>{patient.firstName}</td>
        <td>{patient.lastName}</td>
        <td>{patient.DOB}</td>
        <td>{patient.phoneNumber}</td>
        <td>{patient.emergencyContact}</td>
        </tr>
    );
}