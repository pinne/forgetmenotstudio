import Image from 'next/image'
import aptStyling from '../../images/apt-styling.jpg'
import tavla from '../../images/bild-med-tavla.png'
import styles from '../../components/project-puff.module.css'

function LargePuff({image, project, description}) {
  return (
    <div className={styles.puff}>
      <a href="#">
        <Image
          src={image}
          className={styles.cover}
          width="350"
          height="350"
        />
        <div className={styles.bottom}>
          <div>{project}</div>
          <div>{description}</div>
        </div>
      </a>
    </div>
  )
}
export default function Stories ({ stories }) {
  return <div>
    <h1>Stories</h1>
    <div className={styles.container}>
      <LargePuff
        image={tavla}
        project="Home styling"
        description="Residential concept"
      /> 
      <LargePuff
        image={aptStyling}
        project="Living room"
        description="Residential concept"
      /> 
      </div>
  </div>
}