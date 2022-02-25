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
        </Head>

        {children}

        <footer>&copy; 2021 Forget me not studio ❀</footer>
      </div>
    </>
  )
}
