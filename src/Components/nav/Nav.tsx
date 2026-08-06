import styles from './Nav.module.css'
import weatherIcon from '../../assets/nav and home-assets/weather-app.png'
import savedLocations from '../../assets/nav and home-assets/saved.png'
import settings from '../../assets/nav and home-assets/settings.png'
import { useNavigate } from 'react-router-dom'

export const Nav = () => {

const navigate = useNavigate();
const NavigateSettings =() =>{
        navigate ("settings-page")
}

const Navigate = useNavigate();
const NavigateSavedLocations = () =>{
    Navigate ("saved-locations")
}
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
            <img src={savedLocations} alt='saved locations' className={styles.savedLocations} onClick={NavigateSavedLocations}/>
            <img src={settings} alt='settings' className={styles.settings} onClick={NavigateSettings}/>
        </div>
    </div> 
  )
}
