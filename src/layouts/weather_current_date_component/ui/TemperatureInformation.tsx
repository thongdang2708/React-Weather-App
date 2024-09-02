import {ConvertFromFarenheiToDegree} from "../../../../utils/ConvertFromFarenheitToDegree"
import { TemperatureInformationType, WeatherConditionWithSpecificTime } from '../model/types'
import ListOfWeatherConditions from '@/components/ListOfWeatherConditions'
function TemperatureInformation( {weatherInformation} : TemperatureInformationType ) {

  const weatherInformationList = weatherInformation?.list || [];

  const weatherConditions : WeatherConditionWithSpecificTime[] | [] = weatherInformationList.length > 0 ? weatherInformationList.filter((information) => {

        let currentDate = new Date();

        let month = currentDate.getMonth() + 1;
        let getCurrentDateString = `${currentDate.getFullYear()}-${month >= 10 ? month + 1 : '0' + month}-${currentDate.getDate() >= 10 ? currentDate.getDate() : '0' + currentDate.getDate()}`;

        const dt_txt = information?.dt_txt;
        let informationDate = dt_txt?.split(" ")[0];

        return getCurrentDateString === informationDate;

    }).map((information) => {

        return {
            weather: information?.weather,
            dt_txt: information?.dt_txt
        }
    }
   ) : [];

   const firstWeatherInfo = weatherInformationList.length > 0 ? weatherInformationList[0] : null;

   if (firstWeatherInfo === null) {
    return (
         <div>
                <p className="text-center font-bold text-red-400 text-lg"> There are errors when fetching weather information! </p>
        </div>

    )
   }

   const temp = firstWeatherInfo?.main?.temp;
   const feels_like = firstWeatherInfo?.main?.feels_like;
   const temp_min = firstWeatherInfo?.main?.temp_min;
   const temp_max = firstWeatherInfo?.main?.temp_max;
   
  return (
    <div className="px-6 py-5">
      <div className='w-full mx-auto border-solid border-2 bg-yellow-200 p-6 rounded-lg grid grid-cols-6 shadow-lg'>
        <div className='py-6 col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-2 flex flex-col content-center justify-center'>
          <p className='text-center font-bold text-xl'> {ConvertFromFarenheiToDegree(temp)} &deg;F  </p>
          <p className='text-center font-bold text-sm'> Feels like {ConvertFromFarenheiToDegree(feels_like)} &deg;F </p>
          <p className='text-center font-bold text-sm'> {ConvertFromFarenheiToDegree(temp_min)} ↑ {ConvertFromFarenheiToDegree(temp_max)} ↓ </p>
          
        </div>

        <div className="col-span-4 lg:col-span-5 md:col-span-5 sm:col-span-2">
          <ListOfWeatherConditions weatherConditions={weatherConditions}/>
        </div>
      </div>
    </div>
  )
}

export default TemperatureInformation