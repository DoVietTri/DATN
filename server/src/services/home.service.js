const categoryModel = require('./../models/category.model');
const productModel = require('./../models/product.model');
const bannerModel = require('./../models/banner.model');

let getAllCategories = async () => {
    let categories = await categoryModel.getAllCategory();

    return { message: 'SUCCESS', data: categories };
}

let getNewBooks = async () => {
    let newbooks = await productModel.getNewBooks();

    return { message: 'SUCCESS', data: newbooks }
}

let getBanners = async () => {
    let banners = await bannerModel.getBanners();

    return { message: 'SUCCESS', data: banners };
}

let getCateById = async (id) => {
    let cate = await categoryModel.getByIdCategory(id);

    if (!cate) {
        return { message:'CATEGORY_NOT_FOUND' };
    }

    return { message: 'SUCCESS', data: cate };
}

let getBooksByCateId = async (cateId) => {
    let books = await productModel.getBooksByCateId(cateId);

    return { message: 'SUCCESS', data: books };
}

let getBookById = async (id) => {
    let book = await productModel.getByIdProduct(id);

    if (!book) {
        return { message: 'PRODUCT_NOT_FOUND' };
    }

    return { message: 'SUCCESS', data: book };
}

let getBooksWithAuthor = async (bookId) => {
    let book = await productModel.getByIdProduct(bookId);

    // let bookWithAuthor = await productModel.getBooksWithAuthor()

    return { message: 'SUCCESS', data: book.author };
}

let getBooksWithPrice = async (bookId) => {
    let book = await productModel.getByIdProduct(bookId);

    let data = {
        p_price: book.p_price,
        category: book.category._id
    }
    let books = await productModel.getBooksWithPrice(data);

    let newBooks = books.filter(v => v._id !== book._id);

    return { message: 'SUCCESS', data: newBooks };
}   

module.exports = {
    getAllCategories,
    getNewBooks,
    getBanners,
    getCateById,
    getBooksByCateId,
    getBookById,
    getBooksWithAuthor,
    getBooksWithPrice
}
