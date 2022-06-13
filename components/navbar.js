import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head'

export default function NavigationBar(page){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [st1, setSt1] = useState( {fontWeight: 'normal'} );
    const [st2, setSt2] = useState( {fontWeight: 'normal'} );

    useEffect(() =>
    {if (page){
        if (page.page==='aboutme'){
            setSt1({fontWeight: '600'})
        }
        else if (page.page==='projects'){
            setSt2({fontWeight: '600'})
        }
    }}, [])
    
    return(
        <div>
            <Head>
                <title></title>
                <meta name="description" content="Created by Isaiah Foulidis with Next.js." />
            </Head>

            <div id="Banner">
                <h2><Link href="/"><a>ISAIAH FOULIDIS</a></Link></h2>
            </div>

            <nav>
                <div className='desktopNav'>
                    <motion.div className="menuDivs" whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: 0.2
                        }
                        }}>
                        <Link href="/"><a style ={st1}>About Me</a></Link>
                    </motion.div>
                    <motion.div className="menuDivs" whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: 0.2
                        }
                        }}>
                        <Link href="/projects"><button><a style ={st2}>Projects</a></button></Link>
                    </motion.div>
                    <motion.div className="menuDivs" whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: 0.2
                        }
                        }}>
                        <Link href="/CV.pdf"><a>Resume</a></Link>
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
                            <h1><Link href="/"><a style= {st1} className="mobileMenuLinks" onClick={handleClose}>About Me</a></Link></h1>
                            <hr/>
                            <h1 ><Link href="/projects"><a style= {st2} className="mobileMenuLinks" onClick={handleClose}>Browse Projects</a></Link></h1>
                            {/* Note that links for content in the 'public' folder simple start with a / from anywhere. */}
                            <hr/>
                            <h1><Link href="/CV.pdf"><a className="mobileMenuLinks">Resume</a></Link></h1>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </nav>
        </div>
    )
}