import styles from './Location.module.scss'
import { Link } from 'react-router-dom'

function Location() {
return (
<div className={styles.container}>
        <h3>Location</h3>
    <img src="/plane-sunset-screen.jpg" alt="location, avion coucher de soleil" />
            <p>Si vous êtes passionné d'aviation et que vous cherchez à voler dans un avion biplace ultra-léger et performant, la location de notre VL3 pourrait vous intéresser.</p>
            <Link to='/location'>En savoir plus</Link>
</div>
)
}

export default Location