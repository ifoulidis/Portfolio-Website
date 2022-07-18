import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion'

export default function Card(link, title, description, imageArray){
  const imageSet = [];
  for (let x in imageArray) {
    let newImage = <Image alt='logo' src={imageArray[x]} key = {x} height={32} width={32}/>
    imageSet.push(newImage) 
  }

  return (
    <Link href={link}><motion.div className="articleGrid" whileHover={{
      scale: [1, 1.4, 1.2],
      zIndex: 1,
      transition: {
        duration: 0.4
      }
    }}>
      <h4 className="cardT">{title}</h4>
      <div className="icon_container">
        {imageSet}
      </div>
      {description}
    </motion.div></Link>
  )
}