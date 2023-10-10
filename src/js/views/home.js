import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { editContact } from "./editcontact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
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
						className="list-group-item d-flex"
						>
						<img src="https://picsum.photos/200" alt=""></img>
						<div className="d-block px-5">
						<h1>{item.full_name}</h1>
						<p className="info"><FontAwesomeIcon icon={faEnvelope} />  {item.email}</p>
						<p className="info"><FontAwesomeIcon icon={faLocationDot} />{item.address}</p>
						<p className="info"><FontAwesomeIcon icon={faPhone} />{item.phone}</p>
						</div>
						<div className="pencontainer">
						<Link to={`/editcontact/${item.id}`}>
						<p className="pen"><FontAwesomeIcon icon={faPen} /></p>
						</Link>
						</div>
						<div className="trashcan px-5">
						<p  onClick={ () => actions.eliminarContacto(item.id)}><FontAwesomeIcon icon={faTrashCan} /></p>
						</div>	
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

