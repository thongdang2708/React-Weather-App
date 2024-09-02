import React from 'react'
import { CurrentWeatherConditionType } from '../model/types'
import SingleWeatherFigures from '@/components/SingleWeatherFigures';

function CurrentWeatherCondition( { weatherInformation } :  CurrentWeatherConditionType) {

    const firstWeatherInformation = weatherInformation?.list?.length > 0 ? weatherInformation?.list[0] : null;
    const city  = weatherInformation?.city || null;

    if (firstWeatherInformation === null || city === null) {
        return (
        <div>
            <p className="text-center font-bold text-red-400 text-lg"> There is an error when fetching details about weather condition! </p>
        </div>
        )   
    }


    return (
    <div className="py-5">
      <div className='w-full mx-auto p-6 rounded-lg grid grid-cols-8'>
        <div className='py-6 col-span-3 lg:col-span-1 md:col-span-1 sm:col-span-3 flex flex-col content-center justify-center border-solid border-2 border-slate-200 lg:mr-10 md:mr-10 sm:mr-4 mr-4 shadow-lg rounded-lg bg-yellow-200 flex flex-col justify-center content-center'>
            <p className='text-center font-bold text-lg'> {firstWeatherInformation?.weather[0]?.description.toUpperCase()} </p>
            <div className='mx-auto'>
                <img src={`https://openweathermap.org/img/wn/${firstWeatherInformation?.weather[0]?.icon}@4x.png`} width={75} height={75} alt="weather-icon"/>
            </div>
        </div>

        <div className="col-span-5 lg:col-span-7 md:col-span-7 sm:col-span-5 bg-blue-200 rounded-lg shadow-lg p-2">
            <SingleWeatherFigures weatherInformation={firstWeatherInformation} city={city}/>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeatherCondition