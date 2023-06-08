import React from "react";
import NavigationBar from "../components/navbar";
import PythonIcon from "../public/python_icon.png";
import NodeIcon from "../public/node-js.png";
import ReactIcon from "../public/react_icon.png";
import CSharpIcon from "../public/csharp_icon.png";
import NextJSIcon from "../public/nextjs_icon.png";
import BootstrapIcon from "../public/bootstrap.png";
import JQueryIcon from "../public/jquery.png";
import PHPIcon from "../public/php.png";
import FirebaseIcon from "../public/firebase_icon.png";
import MYSQLIcon from "../public/mysql.png";
import JSIcon from "../public/javascript.png";
import HTMLIcon from "../public/html.png";
import CSSIcon from "../public/css3.png";
import Card from "../components/card";

export default function Home() {
  return (
    <div>
      <NavigationBar page="projects" />
      <div className="maincontainer">
        <div className="grid-container">
          {Card(
            "./websites/spitfire_records",
            "Spitfire Records",
            <p>Admin centre, payments, product filters, etc.</p>,
            [PHPIcon, MYSQLIcon, JQueryIcon]
          )}
          {Card(
            "./websites/amazon_clone",
            "Amazon Clone",
            <p>Features login/logout, a shopping cart, etc.</p>,
            [ReactIcon, CSSIcon, FirebaseIcon]
          )}
          {Card(
            "./Python_projects/python_close",
            "Python Interface for Close API",
            <p>
              I used Fast API in Python to connect to the Close API and prepare
              data for Power BI
            </p>,
            [PythonIcon]
          )}
          {Card(
            "./websites/node_xero_api",
            "Node Xero API",
            <p>An API to access Xero&#39;s API</p>,
            [NodeIcon]
          )}
          {Card(
            "./UFC_data_science/",
            "UFC Data Science",
            <p>Analysis of UFC data with interesting findings</p>,
            [PythonIcon]
          )}
          {Card(
            "./websites/apologetics_website",
            "Apologetics Website",
            <p>
              Next.js Website &bull; Quiz built from scratch with JS &bull; Many
              Features
            </p>,
            [NextJSIcon, CSSIcon]
          )}
          {/*
          {Card(
            "./websites/relax_dental",
            "Relax Dental",
            <p>See how I tidied up a website with failed plugins</p>,
            [CSSIcon]
          )}
           {Card(
            "./other_projects/savvy_spending",
            "React Native Spending Tracker",
            <p>Cross-platform app &bull; UI built with JSX</p>,
            [ReactIcon]
          )}
          {Card(
            "./other_projects/portfolio_website",
            "Portfolio Website",
            <p>See how this website was made</p>,
            [NextJSIcon, ReactIcon, BootstrapIcon]
          )} */}
          {/* {Card(
            "./websites/latin_blog",
            "Latin Blog",
            <p>A crisp blog with nice features</p>,
            [CSSIcon, JSIcon, BootstrapIcon]
          )}
          {Card(
            "./websites/bootstrap_nature_blog",
            "Bootstrap Blog",
            <p>A simple blog built with Bootstrap</p>,
            [BootstrapIcon, JSIcon, CSSIcon]
          )} */}
          {/* {Card(
            "./websites/white_dove_painting",
            "White Dove Painting",
            <p>A W3.CSS website for a small business</p>,
            [PythonIcon]
          )}
          {Card(
            "./other_projects/border_crossing",
            "C# Game",
            <p>A C# game with jumping and throwing</p>,
            [CSharpIcon]
          )}
          {Card(
            "./Python_projects/folium_map",
            "Folium Map with Layers",
            <p>Interactive markers on a web-map</p>,
            [PythonIcon] 
          )}*/}
        </div>
      </div>
    </div>
  );
}
