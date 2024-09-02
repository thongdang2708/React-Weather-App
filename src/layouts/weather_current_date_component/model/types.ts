import { UserLocation } from "@/layouts/header/model/types";
import { WeatherCondition } from "default_types";

export type CurrentWeatherDateComponentType = {
    city?: string | null,
    setCity?: React.Dispatch<React.SetStateAction<string>>,
    userLocation?: UserLocation | null | undefined,
    setUserLocation?: React.Dispatch<React.SetStateAction<string>>,
};

export type TitleWeatherInformation = {
    weatherInformation?: SingleWeatherAPIResponse | null | undefined
};

export type WeatherConditionWithSpecificTime = {
    weather?: WeatherCondition[] | null | undefined,
    dt_txt?: string | null | undefined
}

export type TemperatureInformationType = {
    weatherInformation?: SingleWeatherAPIResponse | null | undefined
};

export type CurrentWeatherConditionType = {
    weatherInformation?: SingleWeatherAPIResponse | null | undefined
};

export type ForecastSevenDaysConditionType = {
    weatherInformation?: SingleWeatherAPIResponse | null | undefined,
};