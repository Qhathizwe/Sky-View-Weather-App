import './App.css'
import { Nav } from './Components/nav/Nav'
import Search from './Components/search/Search'
import CardProps from './Components/location card/CardProps'
import WindCard from './Components/wind speed/WindCard'
//npm install react-router-dom
//const router = createBrowserRouter([{}])


function App() {
  return (
    <>
    <div className={"AppContainer"}>
        <Nav />
        <Search />
        <CardProps cardItems={{Region: "KwaZulu Natal, South Africa", locationName: "Pietermaritzburg", date: "Wednesday, 09:00am" , temperature: 30, description: "Sunny",}}/> 
        <div>
        <WindCard windItems={{title:"Wind Speed", WindSpeed: "5", description: "from the S", }}/>
        </div> 
    </div>

    </>
  )
}

export default App
