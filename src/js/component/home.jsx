import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from './navbar.jsx';
import Jumbo from './jumbotron.jsx';
import Card from './card.jsx';
import Footer from "./footer.jsx";



const Home = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<div><NavBar /></div>
			<div className="row ms-5 mt-4 mb-4 p-0">
				<Jumbo />
			</div>
			<div className="mx-5 mb-3 d-flex justify-content-between">
				
				<Card title="Card1" description="Venga que estamos acabando " buttonLabel="Find Out More!" />
				
				<Card title="Card2" description=" La virgen que trabajico cuesta seguir el ritmo." buttonLabel="Find Out More!" />
				
				<Card title="Card3" description="Pero que dandolo todo seguro que lo sacamos ." buttonLabel="Find Out More!"/>
				
				<Card title="Card4" description="Lo cierto es que cuesta creer todo lo que hemos aprendido en tan poco tiempo." buttonLabel="Find Out More!"/>
				
			</div>
			<div className="">
				<Footer />
			</div>
	   </div>
	   );
};

export default Home;
