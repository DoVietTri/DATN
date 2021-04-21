import axiosClient from './axiosClient';

const orderAPI = {
    getAllOrders: () => {
        let url = '/orders/get-all-order';
        return axiosClient.get(url);
    },

    getOrderDetailByOrder: (orderId) => {
        let url = `/orders/get-order-detail-by-order/${orderId}`;
        return axiosClient.get(url);
    },

    changeStatusOrder: (id, data) => {
        let url = `/orders/change-status-order/${id}`;
        return axiosClient.put(url, data);
    }
}

export default orderAPI;
