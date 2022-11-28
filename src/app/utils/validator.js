export const validator = (data, config) => {
    const errors = {};
    function validate(validateMethod, data, config) {
        switch (validateMethod) {
            case "isRequired":
                if (data.toString().trim().length === 0) return config.message;
                break;
            case "correctDate":
                if (Date.now() > data) return config.message;
                break;
            case "max":
                if (data.length > config.params) return config.message;
                break;
            case "notNumber":
                if (Number(data)) return config.message;
                break;
            case "isUrl":
                if (!/(http|https):\/\/([\w.]+\/?)\S*/g.test(data)) {
                    return config.message;
                }
                break;

            default:
                return config.message;
        }
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (!errors[fieldName] && error) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
};
