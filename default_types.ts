
export type WeatherInformation = {
    
        id?: number | null,
        name?: string | null,
        coord?: {
            lat?: number | null,
            lon?: number | null
        },
        main?: {
            temp?: number | null,
            feels_like?: number | null,
            temp_min?: number | null,
            temp_max?: number | null,
            pressure?: number | null,
            humidity?: number | null,
            sea_level?: number | null,
            grnd_level?: number | null
        },
        dt?: number | null,
        wind?: {
            speed?: number | null,
            deg?: number | null
        },
        sys?: {
            country?: string | null,
        },
        rain?: string | null,
        snow?: string | null,
        clouds?: {
            all?: number | null,
        },
        weather?: WeatherCondition[] | null, 
}



export type WeatherCondition = {
    id?: number | null,
    main?: string | null,
    description?: string | null,
    icon?: string | null,
}

export type SingleWeatherAPIResponse = {
    message?: string | null,
    cod?: string | null,
    count: number | null,
    list: WeatherInformation[] | null,
}

export type SingleWeatherAPIResponseWithLatitudeAndLongitude = {
        coord?: {
            lon?: number | null,
            lat?: number | null
        },
        weather?: WeatherCondition[],
        base?: string | null,
        main?: {
            temp?: number | null,
            feels_like: number | null,
            temp_min: number | null,
            temp_max: number | null,
            pressure: number | null,
            humidity: number | null,
            sea_level: number | null,
            grnd_level: number | null
        },
        visibility?: number | null,
        wind?: {
            speed?: number | null,
            deg?: number | null,
            gust?: number | null
        },
        clouds?: {
            all?: number | null
        },
        dt?: number | null,
        sys?: {
            type?: number | null,
            id: number | null,
            country?: string | null,
            sunrise?: number | null,
            sunset?: number | null
        },
        timezone?: number | null,
        id?: number | null,
        name?: string | null,
        cod?: number | null
}

export type WeatherInformationHourly = {
    cod?: string | null,
    message?: string | null,
    cnt?: number | null,
    list: HourlyInformation[],
    city?: City,
}

export type City = {
    id?: number | null,
    name?: string | null,
    coord?: {
        lat?: number | null,
        lon?: number | null,
    },
    country?: string | null,
    population?: number | null,
    timezone?: number | null,
    sunrise?: number | null,
    sunset?: number | null
}

export type HourlyInformation = {
    dt?: number | null,
    main?: {
        temp: number | null,
        feels_like: number | null,
        temp_min: number | null,
        temp_max: number | null,
        pressure: number | null,
        sea_level: number | null,
        grnd_level: number | null,
        humidity: number | null,
        temp_kf: number | null,
    },
    weather?: WeatherCondition[],
    clouds?: {
        all?: number | null,
    },
    wind?: {
        speed?: number | null,
        deg?: number | null,
        gust?: number | null,
    },
    visibility?: number | null,
    pop?: number | null,
    sys?: {
        pod?: string | null,
    },
    dt_txt?: string | null,
}
