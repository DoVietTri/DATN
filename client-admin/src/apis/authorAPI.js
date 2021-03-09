import axiosClient from'./axiosClient';

const authorAPI = {
    getAllAuthors: () => {
        let url = '/authors';
        return axiosClient.get(url);
    },

    addNewAuthor: (data) => {
        let url = '/authors';
        return axiosClient.post(url, data);
    }
}

export default authorAPI;
