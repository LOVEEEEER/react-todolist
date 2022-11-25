import httpService from "./http.service";

const tasksEndPoint = "tasks/";

const tasksService = {
    fetchAll: async () => {
        const { data } = await httpService.get(tasksEndPoint);
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(tasksEndPoint + id);
        return data;
    },
    create: async (id, payload) => {
        const { data } = await httpService.put(tasksEndPoint + id, payload);
        return data;
    }
};

export default tasksService;
