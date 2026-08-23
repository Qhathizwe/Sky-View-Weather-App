
import './App.css';
import { Home } from './Pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import SavedLocations from './Pages/Saved locations/SavedLocations';
import SettingsPage from './Pages/Settings/SettingsPage';
import NotFound from './Pages/not found page/Not_Found';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="saved-locations" element={<SavedLocations />} />
      <Route path="settings-page" element={<SettingsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;