import styles from './FormationDetails.module.scss'
import { Link } from 'react-router-dom'

function FormationDetails() {
  return (
    <div className={styles.container}>
      <Link to='/'>↩ Retour</Link>
      <h3>Formation / Entrainement glass cockpit</h3>
      <img src="/plane-franck.jpg" alt="formation, cockpit" />
      <div className={styles.textContainer}>
      <p>Cette formation se concentre sur l'utilisation d'affichages numériques modernes dans les cockpits d'avions, qui fournissent des informations en temps réel sur l'état de l'avion et les conditions de vol. Avec notre formation, vous apprendrez à comprendre et à gérer ces systèmes d'affichage sophistiqués, ce qui peut améliorer la sécurité et l'efficacité en vol. Nous nous assurons que la formation est adaptée à votre niveau d'expérience et à vos besoins spécifiques, pour vous aider à atteindre vos objectifs de pilotage. Contactez-nous pour en savoir plus sur notre formation glass cockpit.</p>
      </div>
    </div>
  )
}

export default FormationDetails
