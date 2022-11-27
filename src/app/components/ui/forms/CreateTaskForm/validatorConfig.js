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
    deadLine: {
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
