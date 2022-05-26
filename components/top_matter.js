import Head from 'next/head'
import Link from 'next/link'
import { NavigationBar } from './navbar'

export default function TopMatter() {
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="Created by Isaiah Foulidis with Next.js." />
      </Head>
      <div id="Banner">
        <h2><Link href="/"><a>ISAIAH FOULIDIS</a></Link></h2>
      </div>
      <NavigationBar/>
    </div>
  )
}