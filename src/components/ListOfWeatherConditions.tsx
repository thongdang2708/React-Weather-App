import { ListOfWeatherConditionType } from './models/types'
import SingleWeatherCondition from './SingleWeatherCondition';

function ListOfWeatherConditions( { weatherConditions} : ListOfWeatherConditionType) {

    const conditions = weatherConditions || [];
  return (
    <div className="weather-condition-list w-full flex content-center border-2 border-solid py-6 px-6 bg-blue-100 rounded-lg shadow-lg">
        {conditions.length > 0 ? (
            <div className='flex flex-row overflow-x-auto'>
                {weatherConditions?.map((weatherCondition : any) => (
                    <SingleWeatherCondition key={weatherCondition?.weather?.id} weatherCondition={weatherCondition}/>
                ))}
            </div>
        ) :  (
            <div>
            <p className='text-xl text-center font-bold text-red-400'> No weather conditions fetched! </p>
            </div>
        )}
    </div>
  )
}

export default ListOfWeatherConditions