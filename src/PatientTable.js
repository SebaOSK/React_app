import PatientRow from './PatientRow';

export default function PatientTable({ patients }) {

    const rows = [];

    patients.forEach((patient) => {
        rows.push(
            <PatientRow patient={patient} key={patient.index}/>
        )
    });

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last  Name</th>
                        <th>DOB</th>
                        <th>Phone Number</th>
                        <th>Emergency Contact</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )

}