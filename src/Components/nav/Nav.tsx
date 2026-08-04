import styles from './Nav.module.css'
import weatherIcon from '../../assets/nav-assets/weather-app.png'
import savedLocations from '../../assets/nav-assets/saved.png'
import settings from '../../assets/nav-assets/settings.png'

export const Nav = () => {
  return (
    
    <div className={styles.navContainer}>
        <div className={styles.logo}>
            <img src={weatherIcon} alt='icon' className={styles.icon}/> 
        </div>
        <div className={styles.logoText}>
                <h1>Sky-View</h1>
                <p className={styles.slogan}>Know your weather, Plan your day</p>
            </div>
        <div className={styles.navIcons}>
            <img src={savedLocations} alt='saved locations' className={styles.savedLocations}/>
            <img src={settings} alt='settings' className={styles.settings}/>
        </div>
    </div> 
  )
}
