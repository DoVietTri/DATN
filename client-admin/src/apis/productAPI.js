import axiosClient from "./axiosClient";

const productAPI = {
    getAllProduct: () => {
        let url = '/products';
        return axiosClient.get(url);
    }
}

export default productAPI;
