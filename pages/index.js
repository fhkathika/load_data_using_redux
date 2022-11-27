import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import Blog from '../Components/Blog'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data1, setData1] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setData1(data)
        console.log(data)
      })
  }, [])
  return (
    <div className={styles.container}>
   {/* <Blog/>
    */}

    
    </div>
  )
}
