import styles from './contacts.module.css'
import TeamImage from './team-image'

function Contacts() {
  return (
    <>
      {/*<h2 id={styles.contact}>The Team</h2>*/}
      <TeamImage />
      <h3 id="contact">Contact</h3>
      <div className={styles.names}>
        <NameBox
          name='Hanna Lindblom'
          email='hanna@forgetmenotstudio.se'
          phoneNumber='+46-70-3878287'
        />
        <NameBox
          name='Lina Antonisen'
          email='lina@forgetmenotstudio.se'
          phoneNumber='+46-70-8471921'
        />
        <NameBox
          name='Erika Söderberg'
          email='erika@forgetmenotstudio.se'
          phoneNumber='+46-76-2322802'
        />
      </div>
    </>
  )
}

function NameBox({ name, email, phoneNumber }) {
  return (
    <div className={styles.nameBox}>
      <p className='nameText'>{name}</p>
      <p><a href={`mailto:${email}`}>{email}</a></p>
      <p>
        <a href={`tel:${phoneNumber}`}>
          {phoneNumber
            .replace(/-/g, '')
            .replace(
              /\+\d\d(\d\d)(\d\d\d)(\d\d)(\d\d)/,
              '0$1-$2 $3 $4'
            )
          }
        </a>
      </p>
    </div>
  )
}

export default Contacts
