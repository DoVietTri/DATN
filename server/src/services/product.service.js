const productModel = require('./../models/product.model');
const { cloudinary } = require('./../utils/cloudinary');
const formatBufferToBase64 = require('./../utils/formatBufferToBase64');

let getAllProducts = async () => {
    let allProducts = await productModel.getAllProducts();

    return { message: 'SUCCESS', data: allProducts };
}

let getByIdProduct = async (productId) => {
    let product = await productModel.getByIdProduct(productId);

    if (!product) {
        return { message: 'PRODUCT_NOT_FOUND' };
    }

    return { message: 'SUCCESS', data: product };
}

let addNewProduct = async (productItem) => {
    let product = await productModel.getProductByCode(productItem.p_code);

    if (product) {
        return { message: 'PRODUCT_EXISTS' };
    }

    let responseUploadDetail = await cloudinary.uploader.upload(formatBufferToBase64(productItem.p_image_detail).content, {
        upload_preset: 'dev_setups'
    });

    let responseData = {
        public_id: responseUploadDetail.public_id,
        url: responseUploadDetail.secure_url
    }

    delete productItem.p_image_detail;

    productItem = {
        ...productItem,
        p_image_detail: responseData
    }

    let newProduct = await productModel.addNewProduct(productItem);

    return { message: 'SUCCESS', data: newProduct };
}

let deleteByIdProduct = async (productId) => {
    let product = await productModel.getByIdProduct(productId);

    if (!product) {
        return { message: 'PRODUCT_NOT_FOUND' };
    }

    let responseDestroyAvatar = await cloudinary.uploader.destroy(product.p_image_detail.public_id);

    if (!responseDestroyAvatar) {
        return { message: 'DESTROY_IMAGE_FAILED' };
    }


    await productModel.deleteByIdProduct(productId);

    return { message: 'SUCCESS' };
}

module.exports = {
    getAllProducts,
    getByIdProduct,
    addNewProduct,
    deleteByIdProduct
}
