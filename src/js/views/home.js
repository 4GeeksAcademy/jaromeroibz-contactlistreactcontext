import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { EditContact } from "./editcontact.js";
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
							<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
							<FontAwesomeIcon icon={faTrashCan} />
							</button>

							<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
									<div className="modal-header">
										<h1 className="modal-title fs-5" id="exampleModalLabel">Delete contact</h1>
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div className="modal-body">
										Are you sure to delete this contact?
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
										<button onClick={ () => actions.eliminarContacto(item.id)} type="button" data-bs-dismiss="modal" className="btn btn-primary">Delete</button>
									</div>
									</div>
								</div>
							</div>
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

