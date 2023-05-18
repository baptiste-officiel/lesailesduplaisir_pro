import { Link } from 'react-router-dom'
import styles from './LocationDetails.module.scss'

function LocationDetails() {
  return (
    <div className={styles.container}>
      <Link to='/'>↩ Retour</Link>
      <h3>Location</h3>
      <img src="/plane-sunset-screen.jpg" alt="location, avion coucher de soleil" />
      <div className={styles.textContainer}>
      <p>Avec ses performances élevées et sa grande maniabilité, le VL3 est un avion idéal pour les vols de loisir ou pour découvrir de nouveaux endroits. Vous pouvez louer notre VL3 pour une journée, une semaine ou plus, selon vos besoins et votre emploi du temps. Nous nous assurons que l'avion est toujours en excellent état et prêt à voler pour que vous puissiez profiter d'une expérience de vol sécurisée et agréable. N'hésitez pas à nous contacter pour en savoir plus sur la location de notre VL3.</p>
      </div>
    </div>
  )
}

export default LocationDetails
