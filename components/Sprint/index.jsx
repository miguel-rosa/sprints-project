import React from "react";
import Gallery from "./components/Gallery";
import styles from "./Sprint.module.css"

const Sprint = ({title, description, gallery, index}) => {
  return (
    <section className={styles.sprint}>
      <div className={`${styles.sprintColumn} ${styles.sprintContentColumn}`}>
        <h3 className={styles.subTitle}>SPRINT 0{index+1}</h3>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <Gallery gallery={gallery}/>
    </section>
  )
}

export default Sprint;