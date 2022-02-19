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

module.exports = { getYear, getTime };