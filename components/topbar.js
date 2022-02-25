import Link from 'next/link'
import { Rotate as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import styles from './topbar.module.css'

function Modal() {
  return (
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
  )
}

function TopBar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={styles.container}>
      {isOpen ? <Modal /> : null}
      <div className={styles.forgetMeNot}>
        <Link href="/">
          <a>Forget me not studio</a>
        </Link>
      </div>
      <Hamburger color={'rgb(233, 170, 235)'} toggled={isOpen} toggle={setOpen} label="Show menu" size={48} />
    </div>
  )
}

export default TopBar
