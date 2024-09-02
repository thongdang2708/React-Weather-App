import React from 'react'
import { TitleWeatherInformation } from '../model/types';
import {ConvertToDayFunction} from "../../../../utils/ConvertToDay";

function TitleWeatherInformation({ weatherInformation } : TitleWeatherInformation) {

  const dt_txt = weatherInformation?.list?.length > 0 ? weatherInformation?.list[0].dt_txt : null;

  if (dt_txt === null) {
    return (
      <div>
             <p className="text-center font-bold text-red-400 text-lg"> There are errors when fetching weather title information! </p>
       </div>
    )
  }
  return (
    <div className='px-6 py-5'>
    <div className='text-lg font-bold'> {ConvertToDayFunction(dt_txt)}</div>
    </div>
  )
}

export default TitleWeatherInformation