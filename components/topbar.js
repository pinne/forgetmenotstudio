import styles from './topbar.module.css'

function ForgetMeNotText() {
  return (
    <div className={styles.forgetMeNot}>Forget me not studio</div>
  )
}
function Nav() {
  return (
    <ul className={styles.nav}>
      <li className={styles.link}>Concept</li>
      <li className={styles.link}>Styling</li>
      <li className={styles.link}>Contact</li>
    </ul>
  )
}

function TopBar() {
  return (
    <div className={styles.container}>
      <ForgetMeNotText />
      <Nav />
    </div>
  )
}

export default TopBar
