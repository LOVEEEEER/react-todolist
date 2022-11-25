const tasks = [
    {
        projectId: "acb4828365eb407790ef52a2d8b54f57",
        id: "820eec4681e24c2eb6087213ca1031eb",
        name: "Доработать Main Page",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam ducimus earum laudantium repellat amet, nemo vel fugit eos tempore saepe dignissimos modi veniam ullam recusandae a vitae pariatur ab?",
        created_at: new Date(2021, 10, 11).getTime()
    },
    {
        projectId: "acb4828365eb407790ef52a2d8b54f57",
        id: "401ef6452a0c4ec6858e3cdfeb0120cd",
        name: "Доделать страницу редактирования профиля",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam ducimus earum laudantium repellat amet, nemo vel fugit eos tempore saepe dignissimos modi veniam ullam recusandae a vitae pariatur ab?",
        created_at: new Date(2021, 10, 11).getTime()
    },
    {
        projectId: "acb4828365eb407790ef52a2d8b54f57",
        id: "bb106e3b84984a0ba6948f3c57647d12",
        name: "Поместить комментарии в Redux",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam ducimus earum laudantium repellat amet, nemo vel fugit eos tempore saepe dignissimos modi veniam ullam recusandae a vitae pariatur ab?",
        created_at: new Date(2021, 10, 11).getTime()
    }
];

export const remove = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const elementIndex = tasks.findIndex((task) => task.id === id);
            tasks.splice(elementIndex, elementIndex);
            resolve(null);
        }, 500);
    });
};

export function fetchTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 1000);
    });
}
