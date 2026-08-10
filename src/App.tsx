import './App.css'
import { Home } from './Pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import SavedLocations from './Pages/SavedLocations'
import SettingsPage from './Pages/Settings/SettingsPage'
// import Not_Found from './Pages/Not_Found'



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
