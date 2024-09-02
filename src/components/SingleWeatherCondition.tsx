import { WeatherConditionType } from 'default_types'
import React from 'react'

function SingleWeatherCondition( { weatherCondition} : WeatherConditionType ) {

  return (
    <div className='mx-6 flex flex-col'>
        <div>
        <img src={`https://openweathermap.org/img/wn/${weatherCondition?.weather[0]?.icon}@4x.png`} width={50}
        height={50}
        alt="weather-icon"/>
        </div>
        <p className='font-bold'> {weatherCondition?.weather[0]?.main.toUpperCase()} </p>
        <p className='font-bold '> {weatherCondition?.weather[0]?.description.toUpperCase()} </p>
    </div>
  )
}

export default SingleWeatherCondition