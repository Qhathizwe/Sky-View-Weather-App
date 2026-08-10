import Preferences from '../../Components/preferences/Preferences'
import styles from './Settings.module.css'
import Back from '../../Components/Back-Component/Back'

const SettingsPage = () => {
  return (
    <div className={styles.SetttingsContainer}>
      <Back />
      <Preferences />
    </div>
  )
}
export default SettingsPage;