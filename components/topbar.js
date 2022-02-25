import Link from 'next/link'
import styles from './topbar.module.css'

function TopBar() {
  return (
    <div className={styles.container}>
      <div className={styles.forgetMeNot}>
        <Link href="/">Forget me not studio</Link>
      </div>
      <ul className={styles.nav}>
        <li className={styles.link}><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default TopBar
