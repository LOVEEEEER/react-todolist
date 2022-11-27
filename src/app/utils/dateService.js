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

export const inWorkingDate = (mill) => {
    const hoursDif = Math.round(mill / 1000 / 60 / 60);
    const dayDif = Math.round(mill / 1000 / 60 / 60 / 24);
    if (dayDif === 0) {
        if (hoursDif > 0) {
            const lastOne = hoursDif.toString()[hoursDif.toString().length - 1];
            if (hoursDif === 1) return `${hoursDif} час`;
            if ([2, 3, 4].includes(lastOne)) return `${hoursDif} часа`;
            return `${hoursDif} часов`;
        } else {
            const minutesDif = Math.round(mill / 1000 / 60);
            const lastOne =
                minutesDif.toString()[minutesDif.toString().length - 1];
            if (lastOne === 1) return `${minutesDif} минута`;
            if ([2, 3, 4].includes(lastOne)) return `${minutesDif} минуты`;
            return `${minutesDif} минут`;
        }
    } else {
        const lastOne = dayDif.toString()[dayDif.toString().length - 1];
        if (lastOne === 1) return `${dayDif} день`;
        if ([2, 3, 4].includes(lastOne)) return `${dayDif} дня`;
        return `${dayDif} дней`;
    }
};

export const getFormFormatDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const dateDay = date.getDate();
    const dateMonth = date.getMonth() + 1;
    const dateYear = date.getFullYear();
    return `${dateDay < 10 ? "0" + dateDay : dateDay}.${
        dateMonth < 10 ? "0" + dateMonth : dateMonth
    }.${dateYear}`;
};
