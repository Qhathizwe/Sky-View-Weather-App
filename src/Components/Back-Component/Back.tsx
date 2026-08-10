
import {useNavigate} from 'react-router-dom'
import BackIcon from '../../assets/settings_Prefences/back.png'
import styles from './Back.module.css'

const Back = () => {
    
const navigate = useNavigate();
const NavigateToHome =() =>{
      navigate ("/")
}

return (
    <div className={styles.backContainer}>
      <img src={BackIcon} alt="back-icon" onClick={NavigateToHome}/>
    </div>
  )
}

export default Back
