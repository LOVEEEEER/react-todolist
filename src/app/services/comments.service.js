import httpService from "./http.service";

const commentsEndPoint = "comments/";

const commentsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(commentsEndPoint);
        return data;
    },
    createForTask: async (commentId, payload) => {
        const { data } = await httpService.put(
            commentsEndPoint + commentId,
            payload
        );
        return data;
    }
};

export default commentsService;
