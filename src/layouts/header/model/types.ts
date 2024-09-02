export type HeaderProps = {
    city?: string,
    setCity?: React.Dispatch<React.SetStateAction<string>>,
    userLocation?: UserLocation,
    setUserLocation?: React.Dispatch<React.SetStateAction<UserLocation | undefined>>,
}

export type UserLocation = {
    latitude?: number,
    longitude?: number,
};
  