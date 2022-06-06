import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { NavigationBar } from '../../components/navbar'
import TopMatter from '../../components/top_matter'
import AppImage1 from '../../public//spending_savvy_1.jpg'
import AppImage2 from '../../public//spending_savvy_2.jpg'
import {Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

export default function SpendingSavvy() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <TopMatter/>
      <div>
        <div id="content">
          <h3 id="projectTitle">React Native App&ndash;Spending Savvy</h3>
          <br/>
          <h5>Skills Shown</h5>
          <ul>
            <li>Detailed UI with JSX.</li>
            <li>Use of functional components.</li>
            <li>Handling of user input.</li>
          </ul>
          <h5>Summary</h5>
          <p>I built a React Native frontend for an app which can track spending in multiple categories. Unlike other apps, it doesn&apos;t require access to a bank account or do anything else annoying and excessive. It&apos;s deliberately simple.</p>
          <p>If you&apos;re interested in the code, please <a href="https://github.com/ifoulidis/Savvy-Spending">check it out on GitHub</a>.</p>
          <div id="centredContent">
            <button onClick={handleShow} id="menuIconB">
              SEE IMAGES
            </button>
          </div>
          <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='mmContent'>
              <Image src={AppImage2}></Image>
              <Image src={AppImage1}></Image>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  )
}
