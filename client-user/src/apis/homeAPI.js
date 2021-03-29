import axiosClient from "./axiosClient";

const homeAPI = {
    getAllCategories: () => {
        let url = '/home/all-categories';
        return axiosClient.get(url);
    },

    getNewBooks: () => {
        let url = '/home/new-books';
        return axiosClient.get(url);
    },

    getBanners: () => {
        let url = '/home/banners';
        return axiosClient.get(url);
    },

    getCateById: (id) => {
        let url = `/home/categories/${id}`;
        return axiosClient.get(url);
    },
    getBooksByCateId: (cateId) => {
        let url = `/home/get-book-by-cateid/${cateId}`;
        return axiosClient.get(url);
    },

    getBookById: (id) => {
        let url = `/home/get-book-by-id/${id}`;
        return axiosClient.get(url);
    },
    getBooksWithAuthor: (bookId) => {
        let url = `/home/get-book-with-author/${bookId}`;
        return axiosClient.get(url);
    },

    getBooksWithPrice: (bookId) => {
        let url = `/home/get-book-with-price/${bookId}`;
        return axiosClient.get(url);
    }
}

export default homeAPI;
