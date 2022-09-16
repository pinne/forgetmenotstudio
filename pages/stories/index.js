import Image from 'next/image'
import aptStyling from '../../images/apt-styling.jpg'
import tavla from '../../images/bild-med-tavla.png'
import styles from '../../components/project-puff.module.css'

function LargePuff({image, project, description}) {
  return (
    <div className={styles.puff}>
      <a href="#">
      <div className={styles.imageContainer}>
        <Image
          src={image}
          className={styles.cover}
          layout="fill"
          objectFit="cover"
        />
      </div>
        <div className={styles.bottom}>
          <div>{project}</div>
          <div>{description}</div>
        </div>
      </a>
    </div>
  )
}
export default function Stories ({ stories }) {
  return <main>
    <h1>Stories</h1>
    <h2>Under construction 🚧🚀</h2>
    <div className={styles.container}>
      <LargePuff
        image={tavla}
        project="Home styling"
        description="Residential concept"
      /> 
      <LargePuff
        image={wip}
        project="Haglöfs"
        description="Commerical concept"
      /> 
      <LargePuff
        image={aptStyling}
        project="Living room"
        description="Residential concept"
      /> 
      </div>
  </main>
}