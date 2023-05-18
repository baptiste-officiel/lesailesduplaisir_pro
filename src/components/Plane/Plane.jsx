import Slider from '../Slider/Slider'
import styles from './Plane.module.scss'
import {Link} from 'react-router-dom'

function Ulm() {
  return (
    <div className={styles.planeContainer}>
      <h3>L'ULM</h3>
      <Slider />
      <div className={styles.description}>
      <p>Le VL3 est un avion ultra-léger conçu pour offrir des performances élevées tout en étant très efficace en termes d'énergie.</p>
      <Link to='/plane'>En savoir plus</Link>
      </div>
    </div>
  )
}

export default Ulm
