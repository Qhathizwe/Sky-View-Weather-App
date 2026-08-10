import styles from './Preferences.module.css'
import PreferenceIcon from '../../assets/settings_Prefences/adjustment.png'

const Preferences = () => {
  return (
    <div className={styles.PreferenceContainer}>
        <div className={styles.PreferenceContent}> 
          <div className={styles.title}>
            <img src={PreferenceIcon} alt="Preference-Icon" />
            <h1>Preferences</h1>
          </div>
        </div>
    </div>
  )
}
export default Preferences