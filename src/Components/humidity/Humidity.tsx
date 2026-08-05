import type {HumidityItems} from './HumidityItems'
import styles from './Humidity.module.css'
import humidity from '../../assets/nav and home-assets/humidity.png'

type HumidityProps = {
    humidityItems : HumidityItems
}

export const Humidity: React.FC<HumidityProps> = ({humidityItems}) => {
  return (
    <div className={styles.humidityContainer}>
        <div className={styles.humidityContent}>
            <div className={styles.title}><img src={humidity} alt="humidity-icon" />
            <p>{humidityItems.title}</p>
            </div>

            <h1>{humidityItems.humidity}%</h1>
            <p>{humidityItems.description}</p>
        </div>
    </div>
  )
}
