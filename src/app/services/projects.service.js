import httpService from "./http.service";

const projectsEndPoint = "projects/";

const projectsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(projectsEndPoint);
        return data;
    },
    create: async (id, payload) => {
        const { data } = await httpService.put(projectsEndPoint + id, payload);
        return data;
    },
    remove: async (id) => {
        const { data } = await httpService.delete(id);
        return data;
    }
};

export default projectsService;
