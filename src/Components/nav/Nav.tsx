import styles from './Nav.module.css'
import weatherIcon from '../../assets/nav-assets/weather-app.png'

export const Nav = () => {
  return (
    
    <div className={styles.navContainer}>
        <div className={styles.logo}>
            <img src={weatherIcon} alt='icon' className={styles.icon}/>

            <div className={styles.logoText}>
                <h1>Sky-View</h1>
                <p className={styles.slogan}>Know your weather, Plan your day</p>
            </div>
        </div>
        <div>
        </div>
 
        
    </div> 
  )
}
