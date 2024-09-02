import { SingleWeatherFiguresType } from './models/types'
import { IoEyeSharp } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { WiBarometer } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { ConvertToTime } from  "../../utils/ConvertToTime";
import { BsSunset } from "react-icons/bs";
function SingleWeatherFigures( { weatherInformation, city} : SingleWeatherFiguresType) {

    const visibility : any = weatherInformation?.visibility;
    const humidity :  any = weatherInformation?.main?.humidity;
    const windSpeed : any = weatherInformation?.wind?.speed;
    const windPressure : any = weatherInformation?.main?.pressure;
    const sunrise : any = city?.sunrise;
    const sunset : any = city?.sunset;

  return (
    <div className='flex flex-row content-center justify-between p-3 overflow-x-auto'>
        <div className='flex flex-col content-center justify-center pr-7'>
            <p className='text-lg font-bold text-center'> Visibility </p>
            <IoEyeSharp size={40} className='mx-auto'/>
            <p className='text-lg font-bold text-center'> {visibility / 1000} km </p>
        </div>

        <div className='flex flex-col content-center justify-center pr-7'>
            <p className='text-lg font-bold text-center'> Humidity </p>
            <WiHumidity size={40} className='mx-auto'/>
            <p className='text-lg font-bold text-center'> {humidity} % </p>
        </div>

        <div className='flex flex-col content-center justify-center pr-7'>
            <p className='text-lg font-bold text-center'> Wind speed </p>
            <LuWind size={40} className='mx-auto'/>
            <p className='text-lg font-bold text-center'> {windSpeed} km/h </p>
        </div>

        <div className='flex flex-col content-center justify-center pr-7'>
            <p className='text-lg font-bold text-center'> Air Pressure </p>
            <WiBarometer size={40} className='mx-auto'/>
            <p className='text-lg font-bold text-center'> {windPressure} hPa </p>
        </div>
        
        <div className='flex flex-col content-center justify-center pr-7'>
            <p className='text-lg font-bold text-center'> Sunrise </p>
            <WiSunrise size={40} className='mx-auto'/>
            <p className='text-lg font-bold text-center'> {ConvertToTime(sunrise)} </p>
        </div>

        <div className='flex flex-col content-center justify-center pr-7'>
            <p className='text-lg font-bold text-center'> Sunset </p>
            <BsSunset size={40} className='mx-auto'/>
            <p className='text-lg font-bold text-center'> {ConvertToTime(sunset)} </p>
        </div>
    </div>
  )
}

export default SingleWeatherFigures