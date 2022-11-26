export function displayDate(data) {
    const date = new Date(parseInt(data));
    const dateNow = new Date();
    const yearDif = dateNow.getFullYear() - date.getFullYear();
    if (yearDif === 0) {
        const dayDif = dateNow.getDate() - date.getDate();
        if (dayDif === 0) {
            const hourDif = dateNow.getHours() - date.getHours();
            if (hourDif === 0) {
                const minutesDif = dateNow.getMinutes() - date.getMinutes();
                const lastOne =
                    minutesDif.toString()[minutesDif.toString().length - 1];

                if (minutesDif >= 0 && minutesDif < 1) return "Только что";
                if (
                    [2, 3, 4].includes(Number(lastOne)) &&
                    (minutesDif < 5 || minutesDif > 21)
                ) {
                    return `${minutesDif} минуты назад`;
                }
                if (minutesDif === 1) return `${minutesDif} минуту назад`;
                return `${minutesDif} минут назад`;
            }
            return `${date.getHours()}:${date.getMinutes()}`;
        }
    }

    return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${
        date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1
    }.${date.getFullYear()}`;
}
