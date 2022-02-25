import styles from './topbar.module.css'

function ForgetMeNotText() {
  return (
    <div className={styles.forgetMeNot}>Forget me not studio</div>
  )
}

function TopBar() {
  return (
    <div className={styles.container}>
      <ForgetMeNotText />
      <ul className={styles.nav}>
        <li className={styles.link}><a href="/#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default TopBar
