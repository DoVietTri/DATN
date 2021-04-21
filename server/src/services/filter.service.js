const productModel = require('./../models/product.model');

let filterPrice = async (cateId, range) => {
    let products = [];
    if (range === 'max-50') {
        let data = await productModel.getBookByPriceMax50(cateId);
        products = [...data];
    }
    if (range === 'from-50-to-150') {
        let data = await productModel.getBookByPriceFrom50to150(cateId);
        products = [...data];
    }
    if (range === 'min-150') {
        let data = await productModel.getBookByPriceMin150(cateId);
        products = [...data];
    }

    return { message: 'SUCCESS', data: products };
}

module.exports = {
    filterPrice
}
