export const validatorConfig = {
    name: {
        isRequired: {
            message: "Обязательно для заполнения"
        }
    },
    link: {
        isRequired: {
            message: "Обязательно для заполнения"
        },
        isUrl: {
            message: "Некоректная ссылка"
        }
    }
};
