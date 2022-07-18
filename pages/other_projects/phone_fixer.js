import Head from 'next/head'
import Link from 'next/link'
import NavigationBar from '../../components/navbar'

export default function LocalBusinessWebsite() {
  return (
    <div>
      <NavigationBar page='projects'/>
      <div className="container">
        <div>
          <div id="content">
            <h2 id="projectTitle">Local Business Website</h2>
            <br/>
            <h5>Skills Shown</h5>
            <ul>
              <li>Use of HTML and CSS.</li>
              <li>Responsive design.</li>
              <li>Use of PHP for a form.</li>
            </ul>
            <h5>Summary</h5>
            <p><br/>This is a very simple, crisp local business website that displays competence with basic web design skills and use of PHP for a contact form.</p>
            <p>To see it, click <a href="https://phonefixer.co.nz" className='inTextLinks'>this link</a> or go to https://phonefixer.co.nz</p>
          </div>
        </div>
      </div>
    </div>
  )
}