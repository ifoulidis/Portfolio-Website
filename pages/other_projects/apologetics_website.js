import Head from 'next/head'
import Link from 'next/link'
import { NavigationBar } from '../../components/navbar'
import TopMatter from '../../components/top_matter'

export default function UFC_Data_Science() {
  return (
    <div>
      <TopMatter/>
      <div>
        <div id="content">
          <h2>Philosophy Website</h2>
          <p><br/>Using Next.js, mostly custom CSS, and some React Bootstrap, I created a philosophy website. It features quizes I made the functionality for from scratch in JS. I am still filling out the content and will be making changes, but it showcases some of my skills with web development nonetheless.</p>
          <p>The main quiz asks the user critical questions that have logically inescapable answers. If the user selects certain responses, brief explanations are provided as to why that position is logicaly untenable or what they may wish to investigate next. Links are provided to full articles on the site and to outside resources.</p>
          <p>To see it, click <a href="https://whatistruth.vercel.app/">this link</a> or go to https://whatistruth.vercel.app/</p>
        </div>
      </div>
    </div>
  )
}
