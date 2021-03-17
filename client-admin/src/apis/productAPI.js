import axiosClient from "./axiosClient";

const productAPI = {
    getAllProduct: () => {
        let url = '/products';
        return axiosClient.get(url);
    },

    addNewProduct: (data) => {
        let url = '/products';
        return axiosClient.post(url, data);
    },

    deleteProductById: (id) => {
        let url = `/products/${id}`;
        return axiosClient.delete(url);
    },

    getProductById: (id) => {
        let url = `/products/${id}`;
        return axiosClient.get(url);
    }
}

export default productAPI;
