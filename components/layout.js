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

        <footer id="#footer">
          <p>&copy; 2021-2022 Forget me not Studio</p>
          <p>FMN Studio AB</p>
          <p>Stockholm, Sweden</p>
          <p>Org # 559378-6105</p>
        </footer>
      </div>
    </>
  )
}
