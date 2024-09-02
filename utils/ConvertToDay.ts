export const ConvertToDayFunction = (dt_txt : string) : string => {

    const arrayDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const date = new Date(dt_txt);

    const dateString = arrayDays[date.getDay()] + ", " + date.getFullYear() + '-' + date.getMonth() + "-" + date.getDate();

    return dateString;
}