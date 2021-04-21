import axiosClient from './axiosClient';

const filterAPI = {
    filterPrice: (cateId, data) => {
        let url = `/filters/filter-price/${cateId}`;
        return axiosClient.post(url, data);
    }
}

export default filterAPI;
