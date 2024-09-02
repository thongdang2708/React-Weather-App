import { ForecastSevenDaysConditionType } from '../model/types';
import { ConvertDate } from "../../../../utils/ConvertDate";
import SingleWeatherFiguresWithTemperature from '@/components/SingleWeatherFiguresWithTemperature';

function ForecastSevenDaysCondition( { weatherInformation} : ForecastSevenDaysConditionType) {

    const today = ConvertDate(0);
    const tomorrow = ConvertDate(1);
    const secondDate = ConvertDate(2);
    const thirdDate = ConvertDate(3);
    const fourthDate = ConvertDate(4);
    const fifthDate = ConvertDate(5);
    const sixthDate = ConvertDate(6);

    const weatherInformationList = weatherInformation?.list || [];

    const currentConditionsInDates = weatherInformationList.length > 0 ? weatherInformationList.filter((informationForWeather, _, array) => {

      const thisDateValue = array.find((subInformation) => {
        const dt_txt : any= subInformation?.dt_txt;
        const informationDate = dt_txt.split(" ")[0];
        return informationDate === today;
      });

      const tomorrowDateValue = array.find((subInformation) => {
        const dt_txt : any= subInformation?.dt_txt;
        const informationDate = dt_txt.split(" ")[0];
        return informationDate === tomorrow;
      });

      const secondDateValue = array.find((subInformation) => {
        const dt_txt : any= subInformation?.dt_txt;
        const informationDate = dt_txt.split(" ")[0];
        return informationDate === secondDate;
      });

      const thirdDateValue = array.find((subInformation) => {
        const dt_txt : any= subInformation?.dt_txt;
        const informationDate = dt_txt.split(" ")[0];
        return informationDate === thirdDate;
      });

      const fourthateValue = array.find((subInformation) => {
        const dt_txt : any= subInformation?.dt_txt;
        const informationDate = dt_txt.split(" ")[0];
        return informationDate === fourthDate;
      });

      const fifthDateValue = array.find((subInformation) => {
        const dt_txt : any= subInformation?.dt_txt;
        const informationDate = dt_txt.split(" ")[0];
        return informationDate === fifthDate;
      });

      const sixthDateValue = array.find((subInformation) => {
        const dt_txt : any= subInformation?.dt_txt;
        const informationDate = dt_txt.split(" ")[0];
        return informationDate === sixthDate;
      });
      
      return (thisDateValue?.dt === informationForWeather?.dt) || (secondDateValue?.dt === informationForWeather?.dt) || (thirdDateValue?.dt === informationForWeather?.dt) || (fourthateValue?.dt === informationForWeather?.dt)|| (fifthDateValue?.dt === informationForWeather?.dt) || (sixthDateValue?.dt === informationForWeather?.dt) || (tomorrowDateValue?.dt === informationForWeather?.dt);
      
    }) : null;

    if (currentConditionsInDates === null || currentConditionsInDates === undefined) {
      return (
        <div>
          <p className="text-center font-bold text-red-400 text-lg"> There is an error when fetching details about weather condition in forecast 7 days! </p>
        </div>
      )
    }

  return (
    <div>
        <div className='py-6 px-6'>
            <p className="text-xl font-bold"> Forecast (7 days) </p>

            {currentConditionsInDates.map((condition) => (
             <SingleWeatherFiguresWithTemperature key={condition?.dt} weatherInformation={condition} city={weatherInformation?.city}/>
            ))}

            
           
        </div>
    </div>
  )
}

export default ForecastSevenDaysCondition