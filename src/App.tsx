import './App.css'
import { Nav } from './Components/nav/Nav'
import Search from './Components/search/Search'
import CardProps from './Components/location card/CardProps'
//npm install react-router-dom
//const router = createBrowserRouter([{}])


function App() {
  return (
    <>
    <div className={"AppContainer"}>
        <Nav />
        <Search />
        <CardProps cardItems={{locationName: "Pietermaritzburg", temperature: 30, windSpeed: 9, description: "Sunny", humidity: 82}}/>  
    </div>

    </>
  )
}

export default App
