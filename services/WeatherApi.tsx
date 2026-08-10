// import { useEffect } from 'react';

// export default function WeatherTest() {
//   useEffect(() => {
//     // 1. Access the Vite environment variable
//     const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    
//     // 2. Define a target location for the test
//     const location = 'London'; 
//     const url = `https://visualcrossing.com{location}?unitGroup=metric&key=${apiKey}&contentType=json`;

//     // 3. Fetch data and log it to the console
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('Weather API Data successfully fetched:', data);
//       })
//       .catch((error) => {
//         console.error('Error fetching weather data:', error);
//       });
//   }, []);

//   return (
//     <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
//       <h3>Weather API Testing Component</h3>
//       <p>Check your browser console (F12) to view the API response.</p>
//     </div>
//   );
// }
