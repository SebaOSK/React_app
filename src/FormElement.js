export default function FormElement({label, name, type, value, handleChange}) {

    return (
        <>
        <label htmlFor={name}>
            {label} <input type={type} id={name} name={name} value={value} onChange={handleChange}/>
        </label><br />
        </>
        
    )
}