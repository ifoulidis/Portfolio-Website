import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PythonIcon from '../public/python_icon.png'
import ReactIcon from '../public/react_icon.png'
import CSharpIcon from '../public/csharp_icon.png'
import NextJSIcon from '../public/nextjs_icon.png'
import 'bootstrap/dist/css/bootstrap.css'
import TopMatter from '../components/top_matter' 

export default function AboutMe() {
  return (
    <div className="container">
      <TopMatter/>
      <div id="content">
        <div id='icon_container'>
          <Link href="./UFC_data_science/"><a><Image  src={PythonIcon} height={32} width={32}/></a></Link>
          <Link href="other_projects/spending_savvy"><a><Image  src={ReactIcon} height={32} width={32}/></a></Link>
          <Link href="other_projects/apologetics_website"><a><Image  src={NextJSIcon} height={32} width={32}/></a></Link>
          <Link href="other_projects/border_crossing"><a><Image  src={CSharpIcon} height={32} width={32}/></a></Link>
        </div>
        <br></br>
        <p>I am a mostly self-taught programmer looking to move into the field professionally.</p>
        <p>For the last few years, I have put my biochemistry knowledge to use as a Freelance English and Specialist Editor for scientific journals.</p>
        <p>Fortunately, that means I&apos;m already well-accustomed to combing through dense content to find errors.</p>
        <p>Please take a look at some of the projects I have completed. Clicking one of the icons above will take you to my favourite project using that language/framework.</p>
      </div>
    </div>
  )
}
