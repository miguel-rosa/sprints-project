import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SPRINT_DATA  from "../data/sprints.json";
import Header from "../components/Header";
import Sprint from "../components/Sprint";

export default function Home() {
  console.log('SPRINT_DATA', SPRINT_DATA)
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorem</title>
        <meta name="description" content="Lorem" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        {
          SPRINT_DATA && SPRINT_DATA.map( (sprint, index) => (
            <Sprint key={index} index={index} {...sprint}/>
          ))
        }
      </main>
      <div className={styles.background}/>
    </div>
  )
}
