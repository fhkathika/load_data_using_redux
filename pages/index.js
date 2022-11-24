import Head from 'next/head'
import Image from 'next/image'
import Blog from '../Components/Blog'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
   <Blog/>
    </div>
  )
}
