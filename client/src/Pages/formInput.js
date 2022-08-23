import "./CSS/formInput.css"

const FormInput = (props) => {
	const { label, onChange, id, ...inputProps} = props;
	return (
		<div className="formInput">
			<label>{label}</label>
			<input {...inputProps} onChange={onChange}/>
			<span>Error</span>
		</div>
	)
}

export default FormInput;