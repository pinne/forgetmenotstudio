import Image from 'next/image'
import styles from './project-puff.module.css'
import nibblaStolar from './../images/nibbla-stolar.jpg'
import wip from './../images/work-in-progress.jpg'
import aptStyling from './../images/apt-styling.jpg'

function LargePuff({image, project, description}) {
  return (
    <div className={styles.puff}>
      <a href="#">
        <Image
          src={image}
          className={styles.cover}
        />
        <div className={styles.bottom}>
          <div>{project}</div>
          <div>{description}</div>
        </div>
      </a>
    </div>
  )
}
function ProjectPuff() {
  return (
    <div>
      <div className={styles.container}>
        <LargePuff
          image={nibblaStolar}
          project="Living room"
          description="Residential concept"
        /> 
      </div>
      <div className={styles.container}>
        <LargePuff
          image={wip}
          project="Work in progress"
          description="Haglöfs head office Stockholm"
        />
        <LargePuff
          image={aptStyling}
          project="Living room"
          description="Styling"
        />
      </div>
    </div>
  )
}

export default ProjectPuff
