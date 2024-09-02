
export const ConvertDate = (value : number) : string => {

    const date = new Date();

    const followingDate = new Date();

    followingDate.setDate(date.getDate() + value);

    const month = followingDate.getMonth() + 1;

    const monthString = month >= 10 ? month.toString() : "0" + month.toString();

    const dateString = followingDate.getDate() >= 10 ? followingDate.getDate() : "0" + followingDate.getDate();

    return followingDate.getFullYear() + '-' + monthString + '-' + dateString;
};