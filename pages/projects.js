import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/navbar' 
import PythonIcon from '../public/python_icon.png'
import ReactIcon from '../public/react_icon.png'
import CSharpIcon from '../public/csharp_icon.png'
import NextJSIcon from '../public/nextjs_icon.png'
import BootstrapIcon from '../public/bootstrap.png' 
import {motion} from 'framer-motion'


function Card(link, title, description, image1, image2, image3){
  let images
  if (image3){ 
    images = (
      <div className="icon_container">
        <Image  src={image1} height={32} width={32}/>
        <Image  src={image2} height={32} width={32}/>
        <Image  src={image3} height={32} width={32}/>
      </div>
    )
  }
  else if (image2){
    images = (
      <div className="icon_container">
        <Image  src={image1} height={32} width={32}/>
        <Image  src={image2} height={32} width={32}/>
      </div>
    )
  }
  else if (image1){
    images = (
      <div className="icon_container">
        <Image  src={image1} height={32} width={32}/>
      </div>
    )
  }
  else{
    images = (<div></div>)
  }

  return (
    <Link href={link}><motion.button className="articleGrid" whileHover={{
      scale: [1, 1.4, 1.2],
      zIndex: 1,
      transition: {
        duration: 0.4
      }
    }}>
      <h4 className="cardT">{title}</h4>
      {images}
      {description}
    </motion.button></Link>
  )
}

export default function Projects(){
  return(
    <div className="container">
      <NavigationBar page='projects'/>
      <div className="grid-container">
        {Card('./UFC_data_science/', 'UFC Data Science', 
        <div><p>Analysis of UFC data with interesting findings</p><h4 className="cardT">Featured Project</h4></div>, PythonIcon)}
        {Card("./other_projects/apologetics_website", 'Apologetics Website', 
        <p>A neat website with self-made quizzes and articles</p>, NextJSIcon, ReactIcon, BootstrapIcon)}
        {Card("./other_projects/savvy_spending", 'React Native Spending Tracker', 
        <p>Cross-platform app &bull; UI built with JSX</p>, ReactIcon)}
        {Card("./other_projects/portfolio_website", 'Portfolio Website', 
        <p>See how this website was made</p>, NextJSIcon, ReactIcon, BootstrapIcon)}
        {Card("./other_projects/border_crossing", 'C# Game', 
        <p>A C# game with jumping and throwing</p>, CSharpIcon)}
        {Card("./Python_projects/folium_map", 'Folium Map with Layers', 
        <p>Interactive markers of US volcanoes and world population</p>, PythonIcon)}
        {Card("./other_projects/phone_fixer", 'Basic Local Business Website', 
        <p>A simple HTML and CSS website with a contact form.</p>)}
      </div>
    </div>
  );
}