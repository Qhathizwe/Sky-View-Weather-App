
import styles from './Preferences.module.css';
import PreferenceIcon from '../../assets/settings_Prefences/adjustment.png';
import Themes from './Themes';
import Units from '../preferences/Units';

type PreferencesProps = {
  units: '°C' | '°F';
  changeUnits: () => void;
};

const Preferences: React.FC<PreferencesProps> = ({ units, changeUnits }) => {
  return (
    <div className={styles.PreferenceContainer}>
      <div className={styles.PreferenceContent}>
        <div className={styles.title}>
          <img src={PreferenceIcon} alt="Preference-Icon" />
          <h1>Preferences</h1>
        </div>

        <div className={styles.theme}>
          <Themes />
        </div>
        
        <div className={styles.unitSection}>
          <Units units={units} changeUnits={changeUnits} />
        </div>
      </div>
    </div>
  );
};

export default Preferences;