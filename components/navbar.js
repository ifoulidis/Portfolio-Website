import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image'
import PythonIcon from '../public/python_icon.png';
import ReactIcon from '../public/react_icon.png';
import CSharpIcon from '../public/csharp_icon.png';
import NextJSIcon from '../public/nextjs_icon.png';

export function NavigationBar(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        
        <nav>
            <div className='desktopNav'>
                <div className="menuDivs">
                    <Link href="#" className="desktopNavLinks"><a>About Me</a></Link>
                </div>
                <div className="dropdown">
                    <button className="dropbtn"><a>Projects</a></button>
                    <div className="dropdown-content">
                        <Link href="/UFC_data_science/" className="desktopNavLinks"><a>UFC Data Analysis</a></Link>
                        <Link href="/other_projects/apologetics_website"><a>Philosophy Website</a></Link>
                        <Link href="/other_projects/savvy_spending"><a>React Native Spending Tracker</a></Link>
                        <Link href="/other_projects/border_crossing"><a>Unique C# Game</a></Link>
                        <Link href="/map1.html" className="desktopNavLinks"><a>Map Editing with Folium</a></Link>
                    </div>
                </div>
                <div className="menuDivs">
                    <Link href="#" className="desktopNavLinks"><a>Resume</a></Link>
                </div>
            </div>
            <div className='mobileMenu'>

                <Link href="/"><a className="desktopNavLinks">ISAIAH FOULIDIS</a></Link>
                <button onClick={handleShow} id="menuIconB">
                    <div className='menuIconDiv'></div><div className='menuIconDiv'></div><div className='menuIconDiv'></div>
                </button>
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='mmContent'>
                        <h2 ><Link href="/"><a className="mobileMenuLinks">Home</a></Link></h2>
                        <hr/>
                        {/* Note that links for content in the 'public' folder simple start with a / from anywhere. */}
                        <h3><Link href="/UFC_data_science/"><a className="mobileMenuLinks">UFC Data Analysis <Image  src={PythonIcon} height={32} width={32}/></a></Link></h3>
                        <h3><Link href="/other_projects/savvy_spending"><a className="mobileMenuLinks">React Native Spending Tracker<Image  src={ReactIcon} height={32} width={32}/></a></Link></h3>
                        <h3><Link href="/other_projects/border_crossing"><a className="mobileMenuLinks">Unique C# Game <Image  src={CSharpIcon} height={32} width={32}/></a></Link></h3>
                        <h3><Link href="/other_projects/apologetics_website"><a className="mobileMenuLinks">Philosophy Website <Image  src={NextJSIcon} height={32} width={32}/></a></Link></h3>
                        <h3><Link href="/map1.html"><a className="mobileMenuLinks">Map Editing with Folium <Image  src={PythonIcon} height={32} width={32}/></a></Link></h3>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </nav>
  )
}