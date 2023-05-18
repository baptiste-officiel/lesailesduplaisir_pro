import styles from './PlaneDetails.module.scss'
import { Link } from 'react-router-dom'

function PlaneDetails() {
  return (
    <div className={styles.container}>
      <Link to='/'>↩ Retour</Link>
      <h3>Le VL3</h3>
      <img src="/src/assets/img/plane.jpg" alt="Le VL3" />
      <div className={styles.textContainer}>
      <p>Le VL3 est un avion ultra-léger à hautes performances, fabriqué en France par JMB Aircraft. Il est conçu pour offrir des performances de vol exceptionnelles tout en étant très efficace en termes d'énergie. Le VL3 est équipé d'un moteur Rotax de dernière génération qui offre une grande puissance pour un poids très léger, ce qui permet une montée rapide et une maniabilité exceptionnelle en vol.</p>
      <p>La structure du VL3 est conçue en utilisant des matériaux composites avancés, ce qui lui confère une grande résistance et une durabilité accrue. Le VL3 est équipé de freins aérodynamiques pour faciliter l'atterrissage et réduire la distance d'atterrissage nécessaire. De plus, l'avion est équipé de volets électriques qui permettent une meilleure maîtrise de l'avion en vol à basse vitesse et lors de l'approche pour l'atterrissage.</p>
      <p>Le cockpit du VL3 est équipé d'un affichage numérique moderne, qui permet aux pilotes de visualiser facilement les informations de vol et de naviguer en toute sécurité. L'avion est équipé d'un système de parachute intégré pour la sécurité en cas d'urgence.</p>
      <p>En résumé, le VL3 est un avion ultra-léger de haute performance, idéal pour les pilotes expérimentés ou les amateurs de vol qui recherchent des sensations fortes en vol. Avec sa structure robuste, son moteur puissant et sa maniabilité exceptionnelle, le VL3 offre une expérience de vol unique et passionnante.</p>
      </div>
    </div>
  )
}

export default PlaneDetails
