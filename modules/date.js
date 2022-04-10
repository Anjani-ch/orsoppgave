const getYear = _ => {
    const date = new Date();

    return date.getFullYear();
};

const getTime = _ => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

const formatWithDateAndTime = inputDate => {
    inputDate = new Date(inputDate);

    const year = inputDate.getFullYear().toString();
    const month = inputDate.getMonth();
    const date = inputDate.getDate();
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();

    const formatedMonth = `${month < 10 ? '0' + month : month}`;
    const formatedDate = `${date < 10 ? '0' + date : date}`;
    const formatedYear = year[year.length - 2] + year[year.length - 1];
    const formatedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    const formatedResult = `${formatedMonth}.${formatedDate}.${formatedYear} (${formatedTime})`;

    return formatedResult;
};

module.exports = { getYear, getTime, formatWithDateAndTime };