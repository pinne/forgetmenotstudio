import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import styles from './nav.module.css'

export default function Nav () {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav>
      <div className={styles.icon}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          aria='Show menu'
        />
      </div>
      {isOpen ? (
        <ul className={styles.menu}>
          <li>Current projects</li>
          <li>Creative process</li>
        </ul>
      ) : null}
    </nav>
  )
}
