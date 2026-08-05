import React from 'react'
import wind from '../../assets/nav and home-assets/wind.png'
import type {WindItems} from './WindItems'
import styles from './Wind.module.css'

type windProps ={
   windItems : WindItems
}

 const WindCard: React.FC<windProps> = ({windItems}) => {

  return (
    <div className={styles.WindContainer}>
    
    <div className={styles.windContent}>
        <div className={styles.title}>
        <img src={wind} /><p>{windItems.title}</p>
        </div>
        <h1>{windItems.WindSpeed} km/h</h1>
        <p>{windItems.description}</p>
    </div>
    </div>
  )
}
 
export default WindCard;