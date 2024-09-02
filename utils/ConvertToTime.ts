export const ConvertToTime = (value : number) : string => {
    
    let date = new Date(value);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours} : ${minutes}`;
}