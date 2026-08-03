import styles from './Nav.module.css'
import weatherIcon from '../../assets/weather-app.png'

export const Nav = () => {
  return (
    
    <div className={styles.navContainer}>
        <div className={styles.logo}>
            <h1>Sky-View</h1>
            <p className={styles.slogan}>Know your weather, Plan your day</p>
        </div>

        <div> <img src={weatherIcon} alt='icon' style={{width:'60px', height:'60px'}}/></div>

        <div className={styles.toggles}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3>&deg;C/ &deg;F</h3>
                <label className={styles.Units}>
                <input type="checkbox"/>
                <span className={styles.slider}></span>
                </label>
            </div>

            <div>
                <h3>LIGHT / DARK</h3>
                <label className={styles.themes}>
                <input type="checkbox" checked />
                <span className={styles.slider_round}></span>
                </label>
            </div>


        </div>
    </div>
    
  )
}
