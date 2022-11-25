import httpService from "./http.service";

const projectsEndPoint = "projects/";

const projectsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(projectsEndPoint);
        return data;
    }
};

export default projectsService;
