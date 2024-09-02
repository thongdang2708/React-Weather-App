import { SingleWeatherConditionType } from './models/types'

function SingleWeatherCondition( { weatherCondition} : SingleWeatherConditionType ) {
  
  const weather : any = weatherCondition?.weather;

  const weatherData : any = weather[0];

  return (
    <div className='mx-6 flex flex-col'>
        <div>
        <img src={`https://openweathermap.org/img/wn/${weatherData?.icon}@4x.png`} width={50}
        height={50}
        alt="weather-icon"/>
        </div>
        <p className='font-bold'> {weatherData?.main.toUpperCase()} </p>
        <p className='font-bold '> {weatherData?.description.toUpperCase()} </p>
    </div>
  )
}

export default SingleWeatherCondition