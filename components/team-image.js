import Image from 'next/image'
import groupPhoto from '../images/team.jpg'
import styles from './team-image.module.css'

function TeamImage () {
  return (
    <Image
      src={groupPhoto}
      alt="Picture of the team"
      layout="responsive"
      priority
      placeholder="blur"
      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cP7cfwAIUgNu7ol5NQAAAABJRU5ErkJggg=='
      sizes="50vw"
      width="800"
      height="533"
    />
  )
}

export default TeamImage
