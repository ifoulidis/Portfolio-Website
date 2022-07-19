import Image from 'next/image'
import Link from 'next/link'
import NavigationBar from '../../components/navbar'
import GameImage1 from '../../public/border_security_1.png'
import GameImage2 from '../../public/border_security_2.png'

export default function BorderHopping() {
  return (
    <div>
      <NavigationBar page='projects'/>
      <div className="container">
        <div id="content">
            <h3 id="projectTitle">C# Game&ndash;Border Hopping</h3>
            <br/>
            <h5>Skills Shown</h5>
            <ul>
              <li>Comptence with many OOP features.</li>
              <li>Event handling.</li>
            </ul>
            <h5>Github Link</h5>
            <p><a href='https://github.com/ifoulidis/Border-Hopping' className='inTextLinks'>https://github.com/ifoulidis/Border-Hopping</a></p>
            <h5>Summary</h5>
            <p>This is a C# game I created. I think it&apos;s a humorous concept. You must avoid the border security agents by jumping over them or throwing your sombrero. It shows that I am capable of doing more with C# than following super easy beginner projects. It is rather hideous, as it was thrown together quickly and I am no artist.</p>
            <p>If you&apos;re interested in the code or testing the game, please download it <a href="https://github.com/ifoulidis/Border-Hopping" className='inTextLinks'>from GitHub</a> and run the executable file .</p>
            <Image alt="gameimage" src={GameImage1}></Image>
            <Image alt="gameimage" src={GameImage2}></Image>
            <p></p>
        </div>
      </div>
    </div>
  );
}
