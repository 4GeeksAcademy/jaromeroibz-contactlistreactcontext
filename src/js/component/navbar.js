import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="addcontact ml-auto">
				<Link to="/demo">
					<button className="btn btn-success">add contact</button>
				</Link>
			</div>
		</nav>
	);
};
