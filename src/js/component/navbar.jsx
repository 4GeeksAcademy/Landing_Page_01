import React from "react";


// Componente Navbar

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
			<div className="container">
				<a className="navbar-brand navbarBrand" href="#">Start Boostrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className={`nav-link `} aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link `} aria-current="page" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link `} aria-current="page" href="#">Services</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link `} aria-current="page" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>















	);
};