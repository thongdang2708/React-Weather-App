export const ConvertToDayFunction = (dt_txt : string | undefined) : string => {

    const arrayDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    if (dt_txt === undefined) {
        return "";
    }

    const date = new Date(dt_txt);

    const dateString = arrayDays[date.getDay()] + ", " + date.getFullYear() + '-' + date.getMonth() + "-" + date.getDate();

    return dateString;
}