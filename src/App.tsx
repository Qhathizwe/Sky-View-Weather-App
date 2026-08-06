import './App.css'
import { Home } from './Pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import SavedLocations from './Pages/SavedLocations'
import SettingsPage from './Pages/SettingsPage'
// import Not_Found from './Pages/Not_Found'



//npm install react-router-dom
//const router = createBrowserRouter([{}])

// import { fetchWeatherApi } from 'openmeteo'

// const params = {
//   latitude: 52.52,
//   logitude: 13.41,
//   hourly: "temperature_2m",
// }
// const url = "https://api.open-meteo.com/v1/forecast";
// const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
// const response = responses[0];

// Attributes for timezone and location
// const latitude = response.latitude();
// const longitude = response.longitude();
// const elevation = response.elevation();
// const utcOffsetSeconds = response.utcOffsetSeconds();

// console.log(
// 	`\nCoordinates: ${latitude}°N ${longitude}°E`,
// 	`\nElevation: ${elevation}m asl`,
// 	`\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
// );

// const hourly = response.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
// const weatherData = {
// 	hourly: {
// 		time: Array.from(
// 			{ length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() }, 
// 			(_ , i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
// 		),
// 		temperature_2m: hourly.variables(0)!.valuesArray(),
// 	},
// };

// The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
// console.log("\nHourly data:\n", weatherData.hourly)


function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='saved-locations' element={<SavedLocations />}/>
    <Route path='settings-page' element={<SettingsPage />} />
    {/* <Route path='page-not-found' element={Not_Found}/> */}
    </Routes>
    </>
  )
}

export default App
