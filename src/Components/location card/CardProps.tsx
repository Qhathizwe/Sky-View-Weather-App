import type { CardItems } from './CardItems';
import styles from './CardProps.module.css'

type CardItems_dt = {
    cardItems: CardItems;
};

const CardProps: React.FC<CardItems_dt> = ({ cardItems }) => {
  return (

    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <h1>{cardItems.locationName}</h1>
        <p>Temperature: {cardItems.temperature}°C</p>
        <p>Wind Speed: {cardItems.windSpeed} km/h</p>
        <p>Description: {cardItems.description}</p>
        <p>Humidity: {cardItems.humidity}%</p>
      </div>
    </div>
  )
}
export default CardProps
