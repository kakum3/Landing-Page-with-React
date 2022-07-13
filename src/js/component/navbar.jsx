import React from 'react';


const NavBar = () => {
 return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 <a className="navbar-brand ms-5" href="#">Start Bootstrap</a>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavAltMarkup">
   <div className="navbar-nav">
	 <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
	 <a className="nav-item nav-link" href="#">About</a>
	 <a className="nav-item nav-link" href="#">Services</a>
	 <a className="nav-item nav-link" href="#">Contract</a>
   </div>
 </div>
</nav>);
}


export default NavBar;