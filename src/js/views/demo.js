import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const Demo = (e) => {

	const { store, actions } = useContext(Context);
	const [contact,setContact] = useState({
		"full_name": "",
    	"email": "",
    	"agenda_slug": "agenda_javier",
    	"address":"",
    	"phone":""
	});

	function handleChange (event){
		setContact({
			...contact,
			[event.target.name]:event.target.value
		}) 
	}
	
	console.log(store)
	return (
		<div className="container">
			<form>
				<div className="form-group py-3">
    				<label>Full Name</label>
   					<input value={contact.full_name} onChange={handleChange} name='full_name' type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Full Name"></input>
  				</div>
				<div className="form-group py-3">
					<label >Email address</label>
					<input value={contact.email} onChange={handleChange} name='email'
					type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
					<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
				<div className="form-group py-3">
    				<label>Address</label>
   					<input value={contact.address} onChange={handleChange} name= 'address'type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your address"></input>
  				</div>
				<div className="form-group py-3">
    				<label>Phone number</label>
   					<input value={contact.phone} onChange={handleChange} name= 'phone' type="number" className="form-control" id="formGroupExampleInput" placeholder="Enter your phone number"></input>
  				</div>
				<button onClick={() => actions.agregarContacto(contact)} type="button" className="btn btn-primary py-3">Save Contact</button>
			</form>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
}