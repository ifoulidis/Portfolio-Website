import Head from 'next/head'
import Link from 'next/link'
import NavigationBar from '../../components/navbar'

export default function NatureBootstrapBlog() {
  return (
    <div>
      <NavigationBar page='projects'/>
      <div className="container">
        <div>
          <div id="content">
            <a href="/bootstrap_nature_blog/index.html" className='inTextLinks'><h2 id="projectTitle">Latin Bootstrap Blog</h2></a>
            <br/>
            <h5>Skills Shown</h5>
            <ul>
              <li>Use of Bootstrap grid</li>
              <li>Use of JS components with .createElement.</li>
              <li>Use of custom fonts.</li>
            </ul>
            <h5>Summary</h5>
            <p><br/>This is a blog that looks similar to the Latin blog, but it relies almost entirely on Bootstrap, whereas the other blog relies far more heavily on my own CSS. 
            This blog is simpler; I just built it for Bootstrap experience following a tutorial, and messed around with it afterward. Click <Link href="/bootstrap_nature_blog/index.html"><a className='inTextLinks'>here</a></Link> to see it.</p>
          </div>
        </div>
      </div>
    </div>
  )
}