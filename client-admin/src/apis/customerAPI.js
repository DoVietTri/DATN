import axiosClient from "./axiosClient";

const customerAPI = {
    getAllCustomers: () => {
        let url = '/users';
        return axiosClient.get(url);
    }
}

export default customerAPI;
