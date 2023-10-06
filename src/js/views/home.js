import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<div className="container">
			<ul className="list-group py-5">
			<h1 className="py-3">Contact List</h1>
			{store.contacts.map((item, index) => {
				return (
					<li
						key={index}
						className="list-group-item d-flex justify-content-between"
						>
						<p>{item.full_name}</p>
						<p>{item.email}</p>
						
						<button onClick={ () => actions.eliminarContacto(item.id)}>Eliminar</button>
					</li>
					
				);
			})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

