import Navbar from './navbar'
import Form from './form'
import Head from 'next/head'
import Card from './card'
import Breadcrumb from './breadcrumb'
import Button from './button'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Card/>
      <Form/>
      <Breadcrumb />
      <Button />
    </div>
  )
}
