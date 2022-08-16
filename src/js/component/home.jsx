import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from './navbar.jsx';
import Jumbotron from './jumbotron.jsx';
import Card from './card.jsx';
import Footer from "./footer.jsx";
;

const datos = [
	{image: "https://picsum.photos/500/325", title: "Card Title 1", description: "lorem impsum1", url: "https://picsum.photos/500/325"},
	{image: "https://picsum.photos/500/325", title: "Card Title 2", description: "lorem impsum2", url: "https://picsum.photos/500/325"},
	{image: "https://picsum.photos/500/325", title: "Card Title 3", description: "lorem impsum3", url: "https://picsum.photos/500/325"},
	{image: "https://picsum.photos/500/325", title: "Card Title 4", description: "lorem impsum4", url: "https://picsum.photos/500/325"}
	]




const Home = () => {
	return (	
	<div className="container">
	<Navbar/>
	<Jumbotron/>
	<Card card={datos}/>
	<Footer/>
</div>


	   );
};

export default Home;
