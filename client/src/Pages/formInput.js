import "./CSS/formInput.css"

const FormInput = (props) => {
	const { label, onChange, id, errorMessage, ...inputProps} = props;

	const handleFocus = (e) =>{
		setFocused(true);
	};
	return (
		<div className="formInput">
			<input {...inputProps} onChange={onChange} onBlur{handleFocus} focued = {focused.toString()}/>
			<span>{errorMessage}</span>
		</div>
	)
}

export default FormInput;