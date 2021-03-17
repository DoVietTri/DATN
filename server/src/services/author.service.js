const { cloudinary } = require('../utils/cloudinary');
const authorModel = require('./../models/author.model');
const formatBufferToBase64 = require('./../utils/formatBufferToBase64');

/**
 * Get all author
 * @returns json
 */
let getAllAuthors = async () => {
    let allAuthors = await authorModel.getAllAuthors();

    return { message: 'SUCCESS', data: allAuthors };
}

let addNewAuthor = async (data) => {

    let currAuthor = await authorModel.findAuthorByName(data.a_name);

    if (currAuthor) {
        return { message: 'AUTHOR_EXISTS' };
    }

    let responseUploadImage = await cloudinary.uploader.upload(formatBufferToBase64(data.a_image).content, {
        upload_preset: 'dev_setups'
    });

    if (!responseUploadImage) {
        return { message: 'UPLOAD_FAILED' };
    }

    let responseData = {
        public_id: responseUploadImage.public_id,
        url: responseUploadImage.secure_url
    }

    delete data.a_image;

    data = {
        ...data,
        a_image: responseData
    }

    let itemAuthor = await authorModel.addNewAuthor(data);

    return { message: 'SUCCESS', data: itemAuthor };
}

let getAuthorById = async (id) => {
    let currAuthor = await authorModel.getAuthorById(id);
    if (!currAuthor) {
        return { message: 'AUTHOR_NOT_FOUND' };
    }

    return { message: 'SUCCESS', data: currAuthor };
}

let deleteAuthorById = async (id) => {
    let author = await authorModel.getAuthorById(id);
    if (!author) {
        return { message: 'AUTHOR_NOT_FOUND' };
    }

    for (let i = 0; i < author.a_image.length; i++) {
        let responseDestroyImage = await cloudinary.uploader.destroy(author.a_image[i].public_id);

        if (!responseDestroyImage) {
            return { message: 'DESTROY_IMAGE_FAILED' };
        }

    }

    await authorModel.deleteAuthorById(id);

    return { message: 'SUCCESS' };
}

module.exports = {
    getAllAuthors,
    addNewAuthor,
    getAuthorById,
    deleteAuthorById
}