import React from 'react'

const Button = ({
		buttonText,
		buttonColor = "btn-turq"
	}) =>
	(
		<button className = {`btn ${buttonColor}`}>{buttonText}</button>
	)

export default Button



// The default value for the button is btn-turq, but can be overridden with any existing CSS-class, i.e btn-turq-ghost or btn-white