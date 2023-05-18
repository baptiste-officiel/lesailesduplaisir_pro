import styles from './Formation.module.scss'
import { Link } from 'react-router-dom'

function Formation() {
return (
<div className={styles.container}>
        <h3>Formation / Entrainement glass cockpit</h3>
    <img src="/plane-franck.jpg" alt="formation, cockpit" />
            <p>Si vous êtes intéressé par l'aviation moderne et que vous cherchez à améliorer vos compétences, notre formation glass cockpit pourrait vous intéresser.</p>
            <Link to='/formation'>En savoir plus</Link>
</div>
)
}

export default Formation