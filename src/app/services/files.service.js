import httpService from "./http.service";

const filesEndPoint = "files/";

const filesService = {
    fetchAll: async () => {
        const { data } = await httpService.get(filesEndPoint);
        return data;
    },
    create: async (id, payload) => {
        const { data } = await httpService.put(filesEndPoint + id, payload);
        return data;
    }
};

export default filesService;
