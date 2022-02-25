import Head from 'next/head'
import TopBar from './topbar'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <div className="bg"></div>
      <div className={styles.container}>
        <TopBar />
        <Head>
          <title>FORGET ME NOT STUDIO</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet"></link>
        </Head>

        {children}

        <footer>&copy; 2021–2022 Forget me not studio</footer>
      </div>
    </>
  )
}
