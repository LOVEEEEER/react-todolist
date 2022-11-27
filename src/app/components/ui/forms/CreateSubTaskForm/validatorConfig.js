export const validatorConfig = {
    title: {
        isRequired: {
            message: "Обязательно для заполнения"
        },
        max: {
            message: "Слишком длинный текст",
            params: 15
        }
    },
    description: {
        isRequired: {
            message: "Обязательно для заполнения"
        }
    },
    priority: {
        isRequired: {
            message: "Обязательно для заполнения"
        }
    }
};
