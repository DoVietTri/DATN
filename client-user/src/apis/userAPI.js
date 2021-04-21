import axiosAuthClient from './axiosAuthClient';

const userAPI = {
    verifyEmail: (email) => {
        let url = '/verify-email-register';
        return axiosAuthClient.post(url, email);
    },

    register: (data) => {
        let url = '/register';
        return axiosAuthClient.post(url, data);
    },

    login: (data) => {
        let url = '/user-login';
        return axiosAuthClient.post(url, data);
    },

    getUserById: (id) => {
        let url = `/users/${id}`;
        return axiosAuthClient.get(url);
    },

    updateUserById: (id, data) => {
        let url = `/users/update-info/${id}`;
        return axiosAuthClient.put(url, data);
    },

    updatePasswordByUserId: (data) => {
        let url = `/users/update-password`;
        return axiosAuthClient.put(url, data);
    }   
}

export default userAPI;
