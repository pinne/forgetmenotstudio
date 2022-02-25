import Link from 'next/link'
import styles from './topbar.module.css'
import classnames from 'classnames'

function TopBar() {
  return (
    <div className={styles.container}>
      <div className={classnames(styles.forgetMeNot, styles.desktop)}>
        <Link href="/">
          <a>Forget me not studio</a>
        </Link>
      </div>
      <div className={classnames(styles.forgetMeNot, styles.mobile)}>
        <Link href="/">
          <a>Home</a>
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
