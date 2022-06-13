import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavigationBar from '../../components/navbar'
import GameImage1 from '../../public/border_security_1.png'
import GameImage2 from '../../public/border_security_2.png'

export default function FoliumMap() {
  return (
    <div className="container">
      <NavigationBar/>
      <div id="content">
          <h3 id="projectTitle">Folium Web Page with Map Layers</h3>
          <br/>
          <h5>Skills Shown</h5>
          <ul>
            <li>Creation of webpages using the Python library Folium.</li>
            <li>Versatility of web development skills.</li>
            <li>Basic data retrieval.</li>
          </ul>
          <h5>Summary</h5>
          <p>This is a simple web page I created by following an online tutorial and changing some things to make them fit my preferences and get more experience.</p>
          <p>The map has two layers: one shows the positions of volcanoes in the US (colour coded according to their elevation), and some information about them; the other colour codes countries by their populations. You can see the fullscreen page by clicking <Link href="/map1.html">here.</Link></p>
          <iframe src="/map1.html" width="560" height="315" frameBorder="0"></iframe>
          <p></p>
      </div>
    </div>
  );
}
