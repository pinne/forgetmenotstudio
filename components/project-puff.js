import Image from 'next/image'
import styles from './project-puff.module.css'
import nibblaStolar from './../images/nibbla-stolar.jpg'
import wip from './../images/work-in-progress.jpg'
import aptStyling from './../images/apt-styling.jpg'

function LargePuff({image, project, description, ...style}) {
  return (
    <div className={styles.puff}>
      <a href="#">
        <Image
          src={image}
          className={styles.cover}
          style
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
          description="Concept design"
        /> 
      </div>
      <div className={styles.container}>
        <LargePuff
          image={wip}
          project="Office Makeover"
          description="Design"
        />
        <LargePuff
          image={aptStyling}
          project="Living room"
          description="Concept design"
        />
      </div>
    </div>
  )
}

export default ProjectPuff
