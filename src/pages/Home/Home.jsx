import Plane from '../../components/Plane/Plane';
import Location from '../../components/Location/Location';
import Formation from '../../components/Formation/Formation';
import Contact from '../../components/Contact/Contact';

import styles from './Home.module.scss'

function Home() {
  return (
    <>
        <Plane />
        <div className={styles.locAndFormContent}>
        <Location />
        <Formation />
        </div>
        <Contact />
    </>
  )
}

export default Home
