import axios from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.defaultUrl;

axios.interceptors.request.use(
    function (res) {
        if (config.isFireBase) {
            const containSlash = /\/$/g.test(res.url);
            res.url = (containSlash ? res.url.slice(0, -1) : res.url) + ".json";
        }
        return res;
    },
    function (error) {
        return Promise.reject(error);
    }
);

function transformData(data) {
    return !data.id ? Object.keys(data).map((key) => ({ ...data[key] })) : null;
}

axios.interceptors.response.use(
    function (res) {
        if (res.data === null) return res;
        if (typeof res === "object") {
            res.data = { content: transformData(res.data) };
        }
        return res;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const httpService = {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    delete: axios.delete
};

export default httpService;
