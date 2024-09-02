import { UserLocation } from "@/layouts/header/model/types";
import { WeatherCondition, WeatherInformationHourly } from "default_types";

export type CurrentWeatherDateComponentType = {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    userLocation?: UserLocation;
    setUserLocation: React.Dispatch<React.SetStateAction<UserLocation | undefined>>; // Correct type
};

export type TitleWeatherInformationType = {
    weatherInformation?: WeatherInformationHourly
};

export type WeatherConditionWithSpecificTime = {
    weather: WeatherCondition[] | undefined,
    dt_txt: string | null | undefined
}

export type TemperatureInformationType = {
    weatherInformation?: WeatherInformationHourly
};

export type CurrentWeatherConditionType = {
    weatherInformation?: WeatherInformationHourly, 
};

export type ForecastSevenDaysConditionType = {
    weatherInformation?: WeatherInformationHourly,
};