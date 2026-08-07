// import { useEffect, useState } from "react";

// interface GeolocationCoOrdinates {
//     lat: number | null;
//     long: number | null;
// }

// interface UserGeolocationReturn {
//     lat: number | null;
//     long: number | null;
//     error: string | null;
// }

// const useGeoLocation = () : UserGeolocationReturn => {
//     const [location, setLocation] = useState<GeolocationCoOrdinates>({lat: null, long: null});
//     const [error, setError] = useState<string | null>(null);
    
//     useEffect(() => {
//         if (navigator.geolocation){
//             navigator.geolocation.getCurrentPosition(
//                 (position) =>{
//                     setLocation({lat: position.coords.latitude, long: position.coords.longitude});
//                     setError(null);
//                 },
//                 (err) =>
//                     setLocation({lat: null, long: null});
//                     setError(error.message);
//                 else{
//                     setError("Geolocation is not supported by this browser.")
//                 }

//             )
//         }
//     }[]);
//     return{lat: location.lat, long: location.long, error};
// };