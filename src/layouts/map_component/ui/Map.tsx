import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import {v4 as uuidv4} from 'uuid';
import { Marker, Popup} from 'react-leaflet';

import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { UserLocation } from '@/layouts/header/model/types'
function Map ({userLocation} : UserLocation) {

    const icon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/1865/1865269.png",
        iconSize: [38, 38]
    });


    return (
        <>
        {userLocation?.latitude === null || userLocation?.latitude === undefined || userLocation?.longitude === null || userLocation?.longitude === undefined? (
            <div className='p-6'> 
                <p className='text-center font-bold text-red-400 text-xl'> Here is the location of map, it is not shown because of the unknown location </p>
            </div>
        ) :
        (
            
        <div className='w-full px-6 py-10 h-2/3'>
        <MapContainer key={userLocation?.latitude != null ? userLocation.latitude.toString() : uuidv4()} center={[userLocation?.latitude, userLocation?.longitude]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        <Marker position={[userLocation?.latitude, userLocation?.longitude]} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
        </MapContainer>
        </div>
        )
        }
        </>
    )
}

export default Map