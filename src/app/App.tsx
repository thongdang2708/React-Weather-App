import { UserLocation } from "@/layouts/header/model/types";
import Header from "@/layouts/header/ui/Header";
import Map from "@/layouts/map_component/ui/Map";
import CurrentWeatherDateComponent from "@/layouts/weather_current_date_component/ui/CurrentWeatherDateComponent";
import { FC, useState } from "react";

const App: FC = () => {

  const [city, setCity] = useState<string>("Oulu");
  const [userLocation, setUserLocation] = useState<undefined | UserLocation>({
    latitude: 0,
    longitude: 0,
  });

  console.log(userLocation);

  return (
    <div className={userLocation?.latitude === null || userLocation?.longitude === undefined ? "bg-emerald-200 h-screen" : "bg-emerald-200"}>
      <Header city={city} setCity={setCity} userLocation={userLocation} setUserLocation={setUserLocation}/>
      <Map userLocation={userLocation}/>
      <CurrentWeatherDateComponent city={city} setCity={setCity} userLocation={userLocation} setUserLocation={setUserLocation}/>
    </div>
  );
};

export default App;
