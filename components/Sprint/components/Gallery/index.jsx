import React, { useState } from "react";
import styles from "./Gallery.module.css";

const Gallery = ({gallery}) => {
  return (
    <div className={styles.gallery}>
      {
        gallery?.length > 0 && gallery.map( (galleryItem, index) => {
          if(galleryItem.type==="image"){
            return(
              <div className={styles.galleryItemImage}>
                <figure
                  key={index} 
                  style={{backgroundImage:`url('${galleryItem.image}')`}}
                  className={styles.galleryItemImageFigure}
                />
                <p className={styles.galleryItemImageText}>{galleryItem.description}</p>
              </div>
            )
          }else if(galleryItem.type==="video") {
            return (
              <div className={styles.galleryItemImage}>
                <iframe src={galleryItem.video} className={styles.galleryItemVideo}/>
              </div>
            )
          }
          
        })
      }
    </div>
  )
}

export default Gallery;
