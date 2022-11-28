export const validatorConfig = {
    title: {
        isRequired: {
            message: "Обязательно для заполнения"
        },
        notNumber: {
            message: "Поле не может быть числом"
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
