export default function FormElement(props) {

    return (
        <>
        <label htmlFor={props.name}>
            {props.label} <input type={props.type} id={props.name} name={props.name} value={props.value} onChange={props.onChange}/>
        </label><br />
        </>
        
    )
}