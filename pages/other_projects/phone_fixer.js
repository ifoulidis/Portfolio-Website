import Head from 'next/head'
import Link from 'next/link'
import NavigationBar from '../../components/navbar'

export default function PortfolioWebsite() {
  return (
    <div className="container">
      <NavigationBar/>
      <div>
        <div id="content">
          <h2 id="projectTitle">Portfolio Website</h2>
          <br/>
          <h5>Skills Shown</h5>
          <ul>
            <li>Use of HTML and CSS</li>
            <li>Responsive design.</li>
            <li>Use of PHP for a form.</li>
          </ul>
          <h5>Summary</h5>
          <p><br/>This is a very simple local business website that displays very basic web design skills. It is temporarily unavailable, as there is an issue with the web host (they are serving an old CSS file but new HTML).</p>
        </div>
      </div>
    </div>
  )
}