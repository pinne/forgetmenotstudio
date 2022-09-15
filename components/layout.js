import Head from 'next/head'
import TopBar from './topbar'
import { SocialIcon } from 'react-social-icons'
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

        <footer>
          <div className={styles.companyInfo}>
            <p>FMN Studio AB</p>
            <p>Stockholm, Sweden</p>
            <p>Org # 559378-6105</p>
          </div>
          <div className={styles.copyright}>
            <div>
              <SocialIcon
                url="https://instagram.com/_forgetmenotstudio_"
                height="25"
                width="25"
                bgColor="rgb(220, 225, 241)"
                fgColor="#171924"
                target="_blank"
              />
              &nbsp;
              <SocialIcon
                url="mailto:hello@forgetmenotstudio.se"
                height="25"
                width="25"
                bgColor="rgb(220, 225, 241)"
                fgColor="#171924"
              />
            </div>
            <p>&copy; 2021-2022 Forget me not Studio</p>
          </div>
        </footer>
      </div>
    </>
  )
}
