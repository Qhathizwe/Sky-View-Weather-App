import { Nav } from '../../Components/nav/Nav'
import Search from '../../Components/search/Search'
import CardProps from '../../Components/location card/CardProps'
import WindCard from '../../Components/wind speed/WindCard'
import { Humidity } from '../../Components/humidity/Humidity'
import Forecast from '../../Components/forecast/Forecast'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.AppContainer}>
        <Nav />
        <Search />
        <CardProps cardItems={{Region: "KwaZulu Natal, South Africa", locationName: "Pietermaritzburg", date: "Wednesday, 09:00am" , temperature: 30, description: "Sunny",}}/> 
        <div className={styles.wind_humidity}>
        <WindCard windItems={{title:"Wind Speed", WindSpeed: "5", description: "from the S", }}/>
        <Humidity humidityItems={{title: "Humidity", humidity:"38", description: "Relative humidity"}}/>
        </div> 
        <Forecast />
    </div>

  )
}
