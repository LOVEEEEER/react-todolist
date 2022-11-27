import httpService from "./http.service";

const subTasksEndPoint = "subtasks/";

const subTasksService = {
    fetchAll: async () => {
        const { data } = await httpService.get(subTasksEndPoint);
        return data;
    },
    create: async (id, payload) => {
        const { data } = await httpService.put(subTasksEndPoint + id, payload);
        return data;
    },
    remove: async (id) => {
        const { data } = await httpService.delete(subTasksEndPoint + id);
        return data;
    }
};

export default subTasksService;
