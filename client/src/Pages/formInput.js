import "./CSS/formInput.css";
import { useState } from "react";

const FormInput = (props) => {
	const { label, onChange, id, errorMessage, ...inputProps} = props;
	const [focused, setFocused] = useState(false);
	const handleFocus = (e) =>{
		setFocused(true);
	};
	return (
		<div className="formInput">
			<input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
			<span>{errorMessage}</span>
		</div>
	)
}

export default FormInput;