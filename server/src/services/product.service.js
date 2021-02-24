const productModel = require('./../models/product.model');
const { cloudinary } = require('./../utils/cloudinary');

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

    let url_detail = [];

    for (let i = 0; i < productItem.p_image_detail.length; i++) {
        let responseUploadDetail = await cloudinary.uploader.upload(productItem.p_image_detail[i], {
            upload_preset: 'dev_setups'
        });

        if (!responseUploadDetail) {
            return { message: 'UPLOAD_FAILED' };
        }

        url_detail.push({ public_id: responseUploadDetail.public_id , url: responseUploadDetail.secure_url });
    }

    delete productItem.p_image_detail;

    productItem = {
        ...productItem,
        p_image_detail: [...url_detail]
    }

    let newProduct = await productModel.addNewProduct(productItem);

    return { message: 'SUCCESS', data: newProduct };
}

let deleteByIdProduct = async (productId) => {
    let product = await productModel.getByIdProduct(productId);

    if (!product) {
        return { message: 'PRODUCT_NOT_FOUND' };
    }

    for (let i = 0; i < product.p_image_detail.length; i++) {
        let responseDestroyAvatar = await cloudinary.uploader.destroy(product.p_image_detail[i].public_id);

        if (!responseDestroyAvatar) {
            return { message: 'DESTROY_IMAGE_FAILED' };
        }
    }

    let deleteProduct = await productModel.deleteByIdProduct(productId);

    return { message: 'SUCCESS', data: deleteProduct };
}

module.exports = {
    getAllProducts,
    getByIdProduct,
    addNewProduct,
    deleteByIdProduct
}
