import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image'
import PythonIcon from '../public/python_icon.png';
import ReactIcon from '../public/react_icon.png';
import CSharpIcon from '../public/csharp_icon.png';
import NextJSIcon from '../public/nextjs_icon.png';
import { motion } from 'framer-motion';

export function NavigationBar(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <nav>
            <div className='desktopNav'>
                <motion.div className="menuDivs" whileHover={{
                    scale: 1.2,
                    transition: {
                        duration: 0.2
                    }
                    }}>
                    <Link href="/"><a>About Me</a></Link>
                </motion.div>
                <motion.div className="menuDivs" whileHover={{
                    scale: 1.2,
                    transition: {
                        duration: 0.2
                    }
                    }}>
                    <Link href="/projects"><button className="dropbtn"><a>Projects</a></button></Link>
                </motion.div>
                <motion.div className="menuDivs" whileHover={{
                    scale: 1.2,
                    transition: {
                        duration: 0.2
                    }
                    }}>
                    <Link href="#"><a>Resume</a></Link>
                </motion.div>
            </div>
            <div className='mobileMenu'>
                <Link href="/"><a className="HomeLink">ISAIAH FOULIDIS</a></Link>
                <button onClick={handleShow} id="menuIconB">
                    <div className='menuIconDiv'></div><div className='menuIconDiv'></div><div className='menuIconDiv'></div>
                </button>
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='mmContent'>
                        <h1><Link href="/"><a className="mobileMenuLinks" onClick={handleClose}>About Me</a></Link></h1>
                        <hr/>
                        <h1 ><Link href="/projects"><a className="mobileMenuLinks">Browse Projects</a></Link></h1>
                        {/* Note that links for content in the 'public' folder simple start with a / from anywhere. */}
                        <hr/>
                        <h1><Link href="#"><a className="mobileMenuLinks">Resume</a></Link></h1>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </nav>
  )
}