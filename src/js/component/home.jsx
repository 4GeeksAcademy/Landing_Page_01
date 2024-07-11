import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";



//create your first component
const Home = () => {
	const images = [
		"https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?cs=srgb&dl=pexels-souvenirpixels-1619317.jpg&fm=jpg",
		"https://www.blogdelfotografo.com/wp-content/uploads/2015/09/Paisaje-de-contrastes.jpg",
		"https://content.nationalgeographic.com.es/medio/2021/11/29/fotografo-de-paisajes-naturales-del-ano-ganador-absoluto_5cbce102_800x533.jpg",
		"https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"

	]
	return (
		<div className="landingPage">
			<Navbar />
			<Jumbotron />
			<div className="row">
				{
					images.map((img, index) => {
						return (
							<Card img={img} key={index} />
						)

					})
				}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
