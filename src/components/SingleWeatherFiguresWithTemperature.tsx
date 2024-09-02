import React from 'react'
import { SingleWeatherFiguresWithTemperatureType } from './models/types';
import {ConvertToDayFunction} from "../../utils/ConvertToDay.ts";
import {ConvertFromFarenheiToDegree} from "../../utils/ConvertFromFarenheitToDegree.ts"
import SingleWeatherFigures from './SingleWeatherFigures';

function SingleWeatherFiguresWithTemperature({ weatherInformation, city} : SingleWeatherFiguresWithTemperatureType) {

  return (
    <div className='mx-auto border-2 border-solid border-slate-400 my-5 rounded-lg shadow-lg bg-pink-200 p-3 grid grid-cols-9 gap-6'>
        <div className='col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-2 flex flex-col content-center justify-center'>
            <p className='text-center font-bold'> {ConvertToDayFunction(weatherInformation?.dt_txt)} </p>
            <div className='mx-auto'>
            <img src={`https://openweathermap.org/img/wn/${weatherInformation?.weather[0]?.icon}@4x.png`} width={60}
            height={60}
            alt="weather-icon"/>
            </div>
        </div>

        <div className='col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-2 flex flex-col content-center justify-center'>
            <p className='text-xl font-bold text-center'> {ConvertFromFarenheiToDegree(weatherInformation?.main?.temp)} &deg;F </p>
            <p className='text-xl font-bold text-center'> Feels like {ConvertFromFarenheiToDegree(weatherInformation?.main?.temp)} &deg;F </p>
            <p className='text-center font-bold text-center'> {weatherInformation?.weather[0]?.description?.toUpperCase()} </p>
        </div>

        <div className='col-span-5 lg:col-span-7 md:col-span-7 sm:col-span-5'>
           <SingleWeatherFigures weatherInformation={weatherInformation} city={city}/>
        </div>
    </div>
  )
}

export default SingleWeatherFiguresWithTemperature