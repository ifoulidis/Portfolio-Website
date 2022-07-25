import Image from 'next/image'
import Link from 'next/link'
import PythonIcon from '../public/python_icon.png'
import ReactIcon from '../public/react_icon.png'
import CSharpIcon from '../public/csharp_icon.png'
import NextJSIcon from '../public/nextjs_icon.png'
import 'bootstrap/dist/css/bootstrap.css'
import NavigationBar from '../components/navbar' 

export default function AboutMe() {
  return (
    <div>
      <NavigationBar page='aboutme'/>
      <div className="container">
        <div id="content">
          <div className='icon_container'>
            <Link href="./UFC_data_science/"><a><Image alt='icon' src={PythonIcon} height={32} width={32}/></a></Link>
            <Link href="./other_projects/savvy_spending"><a><Image alt='icon' src={ReactIcon} height={32} width={32}/></a></Link>
            <Link href="./other_projects/apologetics_website"><a><Image alt='icon' src={NextJSIcon} height={32} width={32}/></a></Link>
            <Link href="./other_projects/border_crossing"><a><Image alt='icon' src={CSharpIcon} height={32} width={32}/></a></Link>
          </div>
          <br></br>
          <p>I am an English and Specialist Editor for scientific journals.</p>
          <p>My degree is in biochemistry, but afterward, I became a hobbyist developer and have acquired skills in a number fields of programming.</p>
          <p>Please take a look at some of the projects I have completed. Clicking one of the icons above will take you to my favourite project using that language/framework.</p>
        </div>
      </div>
    </div>
  )
}
