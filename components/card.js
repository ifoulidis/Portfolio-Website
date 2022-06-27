import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion'

export default function Card(link, title, description, image1, image2, image3){
  let images
  if (image3){ 
    images = (
      <div className="icon_container">
        <Image  src={image1} height={32} width={32}/>
        <Image  src={image2} height={32} width={32}/>
        <Image  src={image3} height={32} width={32}/>
      </div>
    )
  }
  else if (image2){
    images = (
      <div className="icon_container">
        <Image  src={image1} height={32} width={32}/>
        <Image  src={image2} height={32} width={32}/>
      </div>
    )
  }
  else if (image1){
    images = (
      <div className="icon_container">
        <Image  src={image1} height={32} width={32}/>
      </div>
    )
  }
  else{
    images = (<div></div>)
  }

  return (
    <Link href={link}><motion.button className="articleGrid" whileHover={{
      scale: [1, 1.4, 1.2],
      zIndex: 1,
      transition: {
        duration: 0.4
      }
    }}>
      <h4 className="cardT">{title}</h4>
      {images}
      {description}
    </motion.button></Link>
  )
}