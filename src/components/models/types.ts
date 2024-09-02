import { WeatherConditionWithSpecificTime } from "@/layouts/weather_current_date_component/model/types"
import { City, HourlyInformation } from "default_types";


export type ListOfWeatherConditionType = {
    weatherConditions?: WeatherConditionWithSpecificTime[]
};

export type SingleWeatherConditionType = {
    weatherCondition: WeatherConditionWithSpecificTime,
};

export type SingleWeatherFiguresType = {
    weatherInformation?: HourlyInformation,
    city?: City,
};

export type SingleWeatherFiguresWithTemperatureType =  {
    weatherInformation?: HourlyInformation,
    city?: City,
};