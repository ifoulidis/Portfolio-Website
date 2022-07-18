import Head from 'next/head'
import Link from 'next/link'
import NavigationBar from '../../components/navbar'

export default function LatinBootstrapBlog() {
  return (
    <div>
      <NavigationBar page='projects'/>
      <div className="container">
        <div>
          <div id="content">
            <h2 id="projectTitle">Latin Bootstrap Blog</h2>
            <br/>
            <h5>Skills Shown</h5>
            <ul>
              <li>Responsive design with Bootstrap and custom CSS.</li>
              <li>Use of JS components with .createElement.</li>
              <li>Use of custom fonts.</li>
              <li>Understanding of CSS animations.</li>
            </ul>
            <h5>Summary</h5>
            <p><br/>This is a blog with a few features to make it nice. On a post, you will find a bottom navbar that can scroll you directly to a section. 
            If you are on one of the main pages, the navbar will show you as much by making the link bold. Hovering on an article on the Articles page or 
            on a link in the navbar will change with scale with a CSS animation. The images have also been scaled to still be crisp on large screens but 
            load much faster than full-size ones.</p>
            <p>To see it, click <a href="http://isaiah-foulidis.great-site.net/" className='inTextLinks'>this link</a> or go to http://isaiah-foulidis.great-site.net/</p>
          </div>
        </div>
      </div>
    </div>
  )
}