import Image from 'next/image'
import groupPhoto from '../images/team.jpg'
import styles from './team-image.module.css'

function TeamImage () {
  return (
    <div className={styles.container}>
      <Image
        src={groupPhoto}
      />
    </div>
  )
}

export default TeamImage
