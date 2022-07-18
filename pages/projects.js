import React from 'react';
import NavigationBar from '../components/navbar' 
import PythonIcon from '../public/python_icon.png'
import ReactIcon from '../public/react_icon.png'
import CSharpIcon from '../public/csharp_icon.png'
import NextJSIcon from '../public/nextjs_icon.png'
import BootstrapIcon from '../public/bootstrap.png' 
import PHPIcon from '../public/php.png'
import JSIcon from '../public/javascript.png'
import HTMLIcon from '../public/html.png'
import CSSIcon from '../public/css3.png'
import Card from '../components/card'

export default function Projects(){
  return(
    <div>
      <NavigationBar page='projects'/>
      <div className="container">
        <div className="grid-container">
          {Card('./UFC_data_science/', 'UFC Data Science', 
          <div><p>Analysis of UFC data with interesting findings</p><h4 className="cardT">Featured Project</h4></div>, PythonIcon)}
          {Card("./other_projects/apologetics_website", 'Apologetics Website', 
          <p>A neat website with self-made quizzes and articles</p>, NextJSIcon, ReactIcon, BootstrapIcon)}
          {Card("./other_projects/savvy_spending", 'React Native Spending Tracker', 
          <p>Cross-platform app &bull; UI built with JSX</p>, ReactIcon)}
          {Card("./other_projects/portfolio_website", 'Portfolio Website', 
          <p>See how this website was made</p>, NextJSIcon, ReactIcon, BootstrapIcon)}
          {Card("./websites/latin_blog", 'Latin Bootstrap Blog', <p>A crisp blog using a variety of the latest techniques</p>, JSIcon, CSSIcon, BootstrapIcon)}
          {Card("./other_projects/phone_fixer", 'Local Business Website',
          <p>A simple website with a PHP contact form</p>, HTMLIcon, CSSIcon, PHPIcon)}
          {Card("./other_projects/border_crossing", 'C# Game', 
          <p>A C# game with jumping and throwing</p>, CSharpIcon)}
          {Card("./Python_projects/folium_map", 'Folium Map with Layers', 
          <p>Interactive markers of US volcanoes and world population</p>, PythonIcon)}
        </div>
      </div>
    </div>
  );
}