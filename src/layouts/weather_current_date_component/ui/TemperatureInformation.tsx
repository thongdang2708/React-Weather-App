import { WeatherInformation } from 'default_types'
import React from 'react'
import {ConvertFromFarenheiToDegree} from "../../../../utils/ConvertFromFarenheitToDegree"
import { TemperatureInformationType } from '../model/types'
import ListOfWeatherConditions from '@/components/ListOfWeatherConditions'

function TemperatureInformation( {weatherInformation} : TemperatureInformationType ) {

  const weatherConditions : WeatherConditionWithSpecificTime[] = weatherInformation?.list?.length > 0 ? weatherInformation?.list?.filter((information) => {

        let currentDate = new Date();

        let month = currentDate.getMonth() + 1;
        let getCurrentDateString = `${currentDate.getFullYear()}-${month >= 10 ? month + 1 : '0' + month}-${currentDate.getDate() >= 10 ? currentDate.getDate() : '0' + currentDate.getDate()}`;

        let informationDate = information?.dt_txt.split(" ")[0];

        return getCurrentDateString === informationDate;

    }).map((information) => {

        return {
            weather: information?.weather,
            dt_txt: information?.dt_txt
        }
    }
   ) : [];

   const firstWeatherInfo = weatherInformation?.list?.length > 0 ? weatherInformation.list[0] : null;

   if (firstWeatherInfo === null) {
    return (
         <div>
                <p className="text-center font-bold text-red-400 text-lg"> There are errors when fetching weather information! </p>
        </div>

    )
   }

  return (
    <div className="px-6 py-5">
      <div className='w-full mx-auto border-solid border-2 bg-yellow-200 p-6 rounded-lg grid grid-cols-6 shadow-lg'>
        <div className='py-6 col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-2 flex flex-col content-center justify-center'>
          <p className='text-center font-bold text-xl'> {ConvertFromFarenheiToDegree(firstWeatherInfo?.main?.temp)} &deg;F  </p>
          <p className='text-center font-bold text-sm'> Feels like {ConvertFromFarenheiToDegree(firstWeatherInfo?.main?.feels_like)} &deg;F </p>
          <p className='text-center font-bold text-sm'> {ConvertFromFarenheiToDegree(firstWeatherInfo?.main?.temp_min)} ↑ {ConvertFromFarenheiToDegree(firstWeatherInfo?.main?.temp_max)} ↓ </p>
          
        </div>

        <div className="col-span-4 lg:col-span-5 md:col-span-5 sm:col-span-2">
          <ListOfWeatherConditions weatherConditions={weatherConditions}/>
        </div>
      </div>
    </div>
  )
}

export default TemperatureInformation