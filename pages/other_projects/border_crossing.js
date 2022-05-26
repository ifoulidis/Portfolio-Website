import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TopMatter from '../../components/top_matter'
import GameImage1 from '../../public/border_security_1.png'
import GameImage2 from '../../public/border_security_2.png'

export default function UFC_Data_Science() {
  return (
    <div>
      <TopMatter/>
      <div id="content">
          <h3 id="projectTitle">C# Game&ndash;Border Crossing</h3>
          <p>This is a C# game I created. I think it&apos;s a humorous concept. You must avoid the border security agents by jumping over them or throwing your sombrero. It shows that I am capable of doing more with C# than following super easy beginner projects. It is rather hideous, as it was thrown together quickly, but I intend to improve it over time.</p>
          <p>If you&apos;re interested in the code, please <a href="https://github.com/ifoulidis/Border-Hopping">check it out on GitHub</a>.</p>
          <Image src={GameImage1}></Image>
          <Image src={GameImage2}></Image>
          <p></p>
      </div>
    </div>
  );
}
