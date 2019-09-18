const tokenizeDate = (date) => {
    let dateArray = date.split("/");
    let month = parseInt(dateArray[0], 10) -1;
    let day = parseInt(dateArray[1], 10);
    let year = parseInt(dateArray[2], 10);
    return { month, day, year };
}

export { tokenizeDate };