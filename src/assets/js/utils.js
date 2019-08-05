export function parseDate(time) {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return `${year}-${month}-${day}`;
}