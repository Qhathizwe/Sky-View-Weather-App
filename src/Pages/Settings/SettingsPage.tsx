import Preferences from '../../Components/preferences/Preferences'
import styles from './Settings.module.css'

const SettingsPage = () => {
  return (
    <div className={styles.SetttingsContainer}>
      <Preferences />
    </div>
  )
}
export default SettingsPage;