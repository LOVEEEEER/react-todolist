export const getTaskPriority = (priority) => {
    switch (priority) {
        case "low":
            return "Низкий";
        case "medium":
            return "Средний";
        case "high":
            return "Высокий";
        default:
            return priority;
    }
};
