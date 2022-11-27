export const validatorConfig = {
    title: {
        isRequired: {
            message: "Обязательно для заполнения"
        }
    },
    description: {
        isRequired: {
            message: "Обязательно для заполнения"
        }
    },
    deadline: {
        isRequired: {
            message: "Обязательно для заполнения"
        },
        correctDate: {
            message: "Некоректная дата"
        }
    },
    priority: {
        isRequired: {
            message: "Обязательно для заполнения"
        }
    }
};
