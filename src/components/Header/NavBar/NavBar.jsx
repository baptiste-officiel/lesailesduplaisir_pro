import styles from './NavBar.module.scss';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <>
    <div className={styles.navbar}>
      <Link to='/'><h1 className="title">LADP</h1></Link>
      <Link to='/'><img src="/src/assets/img/logo_ladp.png" alt="Logo" /></Link>
    </div>
    <h2>Les Ailes du Plaisir</h2>
        <h4>Location d'ULM de tourisme</h4>
        <h4>Formation au Glass Cockpit</h4>
        <hr />
    </>
  )
}

export default NavBar
