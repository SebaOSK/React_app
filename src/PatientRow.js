
export default function PatientRow({patient}) {
    
    return (
        <tr>
        <td>{patient.FirstName}</td>
        <td>{patient.LastName}</td>
        <td>{patient.DOB}</td>
        <td>{patient.PhoneNumber}</td>
        <td>{patient.EmergencyContact}</td>
        </tr>
    );
}