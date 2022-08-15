import Head from 'next/head'
import Link from 'next/link'
import NavigationBar from '../../components/navbar'

export default function PortfolioWebsite() {
  return (
    <div>
      <NavigationBar page='projects'/>
      <div className="container">
        <div id="content">
          <a href='https://github.com/ifoulidis/Portfolio-Website' className='inTextLinks'><h2 id="projectTitle">Portfolio Website</h2></a>
          <br/>
          <h5>Skills Shown</h5>
          <ul>
            <li>Use of custom components.</li>
            <li>Creation of an adaptive UI with custom CSS.</li>
            <li>Understanding of React state and functional components.</li>
            <li>Knowledge of built-in Next.js components.</li>
            <li>Use of Framer Motion animations.</li>
            <li>Deployment, debugging, and testing.</li>
          </ul>
          <h5>Github Link</h5>
          <p><a href='https://github.com/ifoulidis/Portfolio-Website' className='inTextLinks'>https://github.com/ifoulidis/Portfolio-Website</a></p>
          <h5>Summary</h5>
          <p><br/>Using Next.js, mostly custom CSS, some React Bootstrap, and Framer Motion, I created this website. It is not the most complex website I have built (see my <Link href='./apologetics_website'><a className='inTextLinks'>Apologetics Website</a></Link> page).</p>
        </div>
      </div>
    </div>
  )
}