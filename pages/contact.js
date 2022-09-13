import Contacts from '../components/contacts'
import styles from '../components/contacts.module.css'

export default function Contact () {
  return <main>
    <h1>Hire us!</h1>
    <div className={styles.names}>
      <div className={styles.nameBox}>
        <p className='nameText'>For inquiries please contact us at</p>
        <p><a href={`mailto:hello@forgetmenotstudio.se`}>hello@forgetmenotstudio.se</a></p>
      </div>
    </div>
    <Contacts />
  </main>
}
