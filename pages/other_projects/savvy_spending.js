import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { NavigationBar } from '../../components/navbar'
import TopMatter from '../../components/top_matter'
import AppImage1 from '../../public//spending_savvy_1.jpg'
import AppImage2 from '../../public//spending_savvy_2.jpg'

export default function UFC_Data_Science() {
  return (
    <div>
      <TopMatter/>
      <div>
        <div id="content">
          <h3 id="projectTitle">React Native App&ndash;Spending Savvy</h3>
          <br></br>
          <p>I built a React Native frontend for an app which can track spending in multiple categories. Unlike other apps, it doesn&apos;t require access to a bank account or do anything else annoying and excessive. It&apos;s deliberately simple.</p>
          <p>If you&apos;re interested in the code, please <a href="https://github.com/ifoulidis/Savvy-Spending">check it out on GitHub</a>.</p>
          <Image src={AppImage2}></Image>
          <Image src={AppImage1}></Image>
        </div>
      </div>
    </div>
  )
}
