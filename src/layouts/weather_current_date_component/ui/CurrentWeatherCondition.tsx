import { CurrentWeatherConditionType } from '../model/types'
import SingleWeatherFigures from '@/components/SingleWeatherFigures';

function CurrentWeatherCondition( { weatherInformation } :  CurrentWeatherConditionType) {

    const weatherConditionList = weatherInformation?.list || [];

    const firstWeatherInformation = weatherConditionList.length > 0 ? weatherConditionList[0] : null;
    const city = weatherInformation?.city || null;

    if (firstWeatherInformation === null || city === null) {
        return (
        <div>
            <p className="text-center font-bold text-red-400 text-lg"> There is an error when fetching details about weather condition! </p>
        </div>
        )   
    }

    const weatherList = firstWeatherInformation?.weather || [];
    const singleWeatherList = weatherList.length > 0 ? weatherList[0] : null;
    

    if (singleWeatherList === null) {
      return (
        <div>
            <p className="text-center font-bold text-red-400 text-lg"> There is an error when fetching details about weather condition! </p>
        </div>
        )
    }

    const description = singleWeatherList.description;
    const icon = singleWeatherList.icon;
  
    return (
    <div className="py-5">
      <div className='w-full mx-auto p-6 rounded-lg grid grid-cols-8'>
        <div className='py-6 col-span-3 lg:col-span-1 md:col-span-1 sm:col-span-3 flex flex-col content-center justify-center border-solid border-2 border-slate-200 lg:mr-10 md:mr-10 sm:mr-4 mr-4 shadow-lg rounded-lg bg-yellow-200 flex flex-col justify-center content-center'>
            <p className='text-center font-bold text-lg'> {description?.toUpperCase()} </p>
            <div className='mx-auto'>
                <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} width={75} height={75} alt="weather-icon"/>
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