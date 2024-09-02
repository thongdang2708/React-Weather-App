import { useCallback, useEffect, useState } from 'react'
import { CurrentWeatherDateComponentType } from '../model/types';
import { Snackbar } from '@mui/material';
import {SingleWeatherAPIResponseWithLatitudeAndLongitude, WeatherInformationHourly} from "../../../../default_types";
import TitleWeatherInformation from './TitleWeatherInformation';
import TemperatureInformation from './TemperatureInformation';
import CurrentWeatherCondition from './CurrentWeatherCondition';
import ForecastSevenDaysCondition from './ForecastSevenDaysCondition';

function CurrentWeatherDateComponent({ city, setCity, userLocation, setUserLocation} : CurrentWeatherDateComponentType) {

    const [snackBar, setSnackBar] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);
    const [weatherInformation, setWeatherInformation] = useState<WeatherInformationHourly | null>(null);
    const fetchWeatherData = useCallback(() => {
        
        (async () => {
            try {
            let parsedCity : any= "";

            const latitude : any= userLocation?.latitude;
            const longitude : any = userLocation?.longitude;
            if ((latitude !== 0 && longitude !== 0)) {
                let query : string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY}`;

                let response : any = await fetch(query);
                let data : SingleWeatherAPIResponseWithLatitudeAndLongitude = await response.json();
                parsedCity = data?.name;
            } else {
                console.log(`City: ${city}`);
                parsedCity = city;
            }
            
            setCity(parsedCity);
            let weatherQuery : string = `https://api.openweathermap.org/data/2.5/forecast?q=${parsedCity}&appid=${import.meta.env.VITE_API_KEY}&cnt=56`;
            let response : any = await fetch(weatherQuery);

            let data : WeatherInformationHourly = await response.json();

            setWeatherInformation?.(data);
            setUserLocation?.({
                latitude: data?.city?.coord?.lat,
                longitude: data?.city?.coord?.lon
            });

            } catch (error : any) {
                console.error(error?.message);
                setErrorMessage(error?.message);
            }
        })();
    },[city, userLocation?.latitude, userLocation?.longitude, setCity]);

    useEffect(() => {
        fetchWeatherData();
    }, [fetchWeatherData]);

    const handleClose = () => {
        setSnackBar(false);
    }

    if (errorMessage || weatherInformation === null || weatherInformation === undefined) {
        return (
            <div>
                <p className="text-center font-bold text-red-400 text-lg"> There are errors when fetching weather information </p>
            </div>
        );
    }

  return (
    <div>
        
        <div>
        <TitleWeatherInformation weatherInformation={weatherInformation}/>
        <TemperatureInformation weatherInformation={weatherInformation}/>
        <CurrentWeatherCondition weatherInformation={weatherInformation}/>
        <ForecastSevenDaysCondition weatherInformation={weatherInformation}/>
        <Snackbar 
            open={snackBar} 
            onClose={handleClose} 
            autoHideDuration={1000}
            message={errorMessage}
        />
        </div>
    </div>
  )
}

export default CurrentWeatherDateComponent;