import { WeatherConditionWithSpecificTime } from "@/layouts/weather_current_date_component/model/types"
import { City, HourlyInformation, SingleWeatherAPIResponse, WeatherInformation} from "default_types";


export type ListOfWeatherConditionType = {
    weatherConditions?: WeatherConditionWithSpecificTime[]
};

export type SingleWeatherConditionType = {
    weatherCondition?: WeatherConditionWithSpecificTime,
};

export type SingleWeatherFiguresType = {
    weatherInformation?: HourlyInformation | null | undefined,
    city?: City | null | undefined,
};

export type SingleWeatherFiguresWithTemperatureType =  {
    weatherInformation?: HourlyInformation | null | undefined,
    city?: City | null | undefined,
};