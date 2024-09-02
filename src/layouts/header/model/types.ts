export type HeaderProps = {
    city?: string,
    setCity?: React.Dispatch<React.SetStateAction<string>>,
    userLocation?: UserLocation,
    setUserLocation?: React.Dispatch<React.SetStateAction<UserLocation>>,
}

export type UserLocation = {
    latitude?: string | null,
    longitude?: string | null,
};
  