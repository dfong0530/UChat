import "./CSS/formInput.css"

const FormInput = (props) => {
	const { label, onChange, id, errorMessage, ...inputProps} = props;
	return (
		<div className="formInput">
			<input {...inputProps} onChange={onChange}/>
			<span>{errorMessage}</span>
		</div>
	)
}

export default FormInput;