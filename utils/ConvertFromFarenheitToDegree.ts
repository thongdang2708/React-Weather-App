export const ConvertFromFarenheiToDegree = (temperature : number | null | undefined) : number | null | undefined => {

    if (temperature === null || temperature === undefined) {
        return null;
    }
    return parseInt((temperature - 273.15).toFixed(0));
}