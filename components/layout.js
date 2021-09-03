import Head from 'next/head'
import { useState, useEffect } from 'react'
import TopBar from './topbar'
import styles from './layout.module.css'

import debounce from '../util/debounce'

export default function Layout({ children }) {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const updateHeight = debounce(
      () => setHeight(window.innerHeight),
      50)

    window.addEventListener('resize', updateHeight)
    window.addEventListener('orientationchange', updateHeight)
    window.addEventListener('load', updateHeight)
    updateHeight()

    return () => {
      // remove resize listener
      window.removeEventListener('resize', updateHeight)
      window.removeEventListener('orientationchange', updateHeight)
      window.removeEventListener('load', updateHeight)
    }
  }, [])

  return (
    <div className={styles.container} style={{ minHeight: height }}>
      <TopBar />
      <Head>
        <title>FORGET ME NOT STUDIO</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet"></link>
      </Head>

        <header>
          <h1>Forget<br />me not<br />studio</h1>
        </header>

        <main>{children}</main>

      <footer>&copy; 2021 Forget me not studio ❀</footer>
    </div>
  )
}
