https://socialify.git.ci/Qhathizwe/Sky-View-Weather-App/image?language=1&name=1&owner=1&stargazers=1&theme=Auto

# 🌤️ Phoswa-Forecast

A beautiful, responsive weather application built with **React 19 + TypeScript + Vite**. Features real-time weather data, hourly & daily forecasts, geolocation, saved locations, theme switching, unit conversion, and offline caching.

![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.1-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌍 **Real-Time Weather** | Current temperature, humidity, wind speed, and conditions |
| 📅 **7-Day Forecast** | Daily highs, lows, and weather icons |
| ⏰ **Hourly Forecast** | 12-hour breakdown with temperature trends |
| 📍 **Geolocation** | Auto-detects your location on load |
| 🔍 **Search** | Search any city worldwide |
| ⭐ **Saved Locations** | Save and switch between favorite cities |
| 🌓 **Theme Switcher** | Toggle between Light and Dark mode |
| 🌡️ **Unit Toggle** | Switch between Celsius (°C) and Fahrenheit (°F) |
| 🔔 **Weather Alerts** | Displays severe weather notifications |
| 💾 **Offline Cache** | Cached data available when offline |
| 📱 **Responsive** | Optimized for 320px to 1200px+ screens |
| 🎨 **Glassmorphism UI** | Frosted glass cards with backdrop blur |

---

## 🚀 Tech Stack

- **React 19** — UI library
- **TypeScript** — Type safety
- **Vite 8** — Build tool & dev server
- **React Router DOM v7** — Client-side routing
- **Axios** — HTTP requests
- **Visual Crossing Weather API** — Weather data source
- **CSS Modules** — Scoped component styling
- **localStorage** — Persistence (themes, units, saved locations, cache)



---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/mi-weather-app.git
cd mi-weather-app

npm install

VITE_VISUAL_CROSSING_KEY=your_api_key_here

npm run dev

npm run build


## 📁 Project Structure
mi-weather-app/
├── public/
│   └── favicon.png
├── src/
│   ├── App.tsx                    # Root component with routes
│   ├── main.tsx                   # Entry point
│   ├── App.css                    # Global theme variables
│   ├── index.css                  # Base styles
│   ├── hooks/
│   │   └── useWeather.ts          # Weather API hook with caching
│   ├── Components/
│   │   ├── nav/
│   │   │   ├── Nav.tsx            # Navigation bar
│   │   │   ├── Nav.module.css
│   │   │   └── Search.tsx         # Location search input
│   │   ├── location card/
│   │   │   ├── CardProps.tsx      # Main weather display card
│   │   │   ├── CardProps.module.css
│   │   │   └── CardItems.ts
│   │   ├── wind speed/
│   │   │   ├── WindCard.tsx
│   │   │   └── Wind.module.css
│   │   ├── humidity/
│   │   │   ├── Humidity.tsx
│   │   │   └── Humidity.module.css
│   │   ├── forecast/
│   │   │   ├── Forecast.tsx       # Daily & hourly forecast
│   │   │   ├── Forecast.module.css
│   │   │   └── ForecastItems.ts
│   │   ├── weather-icon/
│   │   │   ├── WeatherIcon.tsx    # Emoji weather icon mapper
│   │   │   └── WeatherIcon.module.css
│   │   ├── preferences/
│   │   │   ├── Preferences.tsx
│   │   │   ├── Preferences.module.css
│   │   │   └── Themes.tsx         # Light/Dark theme toggle
│   │   ├── units/
│   │   │   ├── Units.tsx          # °C / °F toggle
│   │   │   └── Units.module.css
│   │   └── Back-Component/
│   │       ├── Back.tsx
│   │       └── Back.module.css
│   ├── Pages/
│   │   ├── home/
│   │   │   ├── Home.tsx           # Main dashboard page
│   │   │   └── Home.module.css
│   │   ├── Settings/
│   │   │   ├── SettingsPage.tsx
│   │   │   └── Settings.module.css
│   │   ├── SavedLocations.tsx     # Saved locations manager
│   │   ├── SavedLocations.module.css
│   │   └── Not_Found.tsx
│   └── assets/                    # Icons & images
├── .env                           # API key
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js

GET https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{location}?unitGroup={unit}&key={apiKey}&contentType=json&include=current,hours,days,alerts


