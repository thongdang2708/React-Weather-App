export const ConvertFromFarenheiToDegree = (temperature : number) : number => {
    return (temperature - 273.15).toFixed(0);
}