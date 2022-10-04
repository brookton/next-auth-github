import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main + 'text-black dark:text-white '}>
        <h1 className={styles.title}></h1>
      </main>
    </Layout>
  )
}

export default Home
