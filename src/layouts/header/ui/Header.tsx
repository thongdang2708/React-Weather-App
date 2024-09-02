import React, { EventHandler, useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdOutlineFindReplace } from "react-icons/md";
import { HeaderProps } from '../model/types';
import Snackbar from "@mui/material/Snackbar";

function Header({ city, setCity, userLocation, setUserLocation } : HeaderProps) {

    const [searchWords, setSearchWords] = useState<string>("");
    const [snackBar, setSnackBar] = useState<boolean>(false);

    const getUserLocation = () => {
        // if geolocation is supported by the users browser
        if (navigator.geolocation) {
          // get the current users location
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // save the geolocation coordinates in two variables
              const { latitude, longitude } = position.coords;
              // update the value of userlocation variable
              setUserLocation({ latitude, longitude });
            },
            // if there was an error getting the users location
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        }
        // if geolocation is not supported by the users browser
        else {
          console.error('Geolocation is not supported by this browser.');
        }
      };

    const handleChange = (e) => {

        setSearchWords(e.target.value);
    }

    const handleSubmit = (e : any) => {
        e.preventDefault();

        if (searchWords.length != 0 && searchWords.length > 20) {
            setSnackBar(true);
            return;
        }
        setCity(searchWords);
        setSearchWords("");
        setUserLocation({ latitude: null, longitude: null });
    }

    const handleClose = () => {
        setSnackBar(false);
    }
  return (
    <header>
        <div className="w-full px-20 py-6 border-b-4 border-solid border-black-200 bg-slate-200">
            <div className="container mx-auto flex flex-col lg:flex-row md:flex-row sm:flex-row content-center justify-center lg:justify-between md:justify-between sm:justify-between">
                <div className="">
                    <p className="text-center text-7xl text-yellow-300"> Weather </p>
                </div>

                <div className="mx-5 flex content-center justify-center border-solid border-2 px-20 py-8">
                    <div className='flex content-center justify-center py-1' onClick={getUserLocation}>
                    <FaLocationCrosshairs size={30} className='cursor-pointer'/>
                    </div>


                    <div className='flex content-center justify-center py-1'>
                    <IoLocationOutline size={30} className='cursor-pointer'/>
                    </div>

                    <div className='flex content-center justify-center py-2 mx-2 font-bold'>
                        <p className='text-center'>
                            {userLocation?.latitude !== null && userLocation?.longitude !== null ? city : "Unknown place"}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                    <div className='flex flex-row lg:flex-row md:flex-row sm:flex-col content-center justify-center'>
                        <input 
                          type="text" 
                          placeholder="Search cities..."
                          value={searchWords}
                          onChange={handleChange}
                          className="focus:outline-none p-2 border-2 border-solid border-yellow-200 rounded-lg"
                        />
                        
                      
                        <div className="w-full mx-auto lg:w-full md:w-full sm:w-1/4 flex content-center justify-center p-2 bg-yellow-200 border-2 border-solid border-black-200 rounded-lg mx-2">
                        <button type='submit'>
                            <MdOutlineFindReplace size={20} />
                        </button>
                        <Snackbar 
                         open={snackBar} 
                         onClose={handleClose} 
                         autoHideDuration={3000}
                         message="You are not allowed to search more than 20 keywords"
                        />
                        </div>
                        
                   
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;