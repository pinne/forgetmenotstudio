import Link from 'next/link'
import styles from './topbar.module.css'

function TopBar() {
  return (
    <div className={styles.container}>
      <div className={styles.forgetMeNot}>
        <Link href="/">
          <a>Forget me not studio</a>
        </Link>
      </div>
      <ul className={styles.nav}>
        <li className={styles.link}>
          <Link href="/stories">
            <a>Stories</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default TopBar
