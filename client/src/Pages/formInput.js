import "./CSS/formInput.css"

const FormInput = (props) => {
	const { label, onChange, id, ...inputProps} = props;
	return (
		<div className="formInput">
			<input {...inputProps} onChange={onChange}/>
<<<<<<< HEAD
			{/* <span>{errorMessage}</span> */}
=======
			<span>Error</span>
>>>>>>> 934760b531d4b4020eb8311c4431db60b50eced6
		</div>
	)
}

export default FormInput;