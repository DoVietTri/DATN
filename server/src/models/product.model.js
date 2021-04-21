const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    p_name: String,
    p_code: String,
    p_slug: String,
    p_price: Number,
    p_hot: { type: String, default: "false" },
    p_quantity: Number,
    p_status: { type: String, default: "Còn hàng" },
    p_datepublic: { type: String, default: null },
    p_image_detail: { public_id: String, url: String },
    p_description: { type: String, default: null },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    author: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
    ],
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    createdAt: { type: Date, default: new Date() }
});

ProductSchema.statics = {
    getAllProducts() {
        return this.find({})
            .populate('category')
            .populate('author')
            .populate('company')
            .sort({ createdAt: -1 }).exec();
    },

    getByIdProduct(id) {
        return this.findById(id)
            .populate('category')
            .populate('author')
            .populate('company').exec();
    },

    getManyBookInArray(arr) {
        return this.find({ '_id': { $in: arr } })
            .populate('category')
            .populate('author')
            .populate('company').exec();
    },

    addNewProduct(product) {
        return this.create(product);
    },

    getProductByCode(code) {
        return this.findOne({ p_code: { $regex: new RegExp(code, 'i') } }).exec();
    },

    deleteByIdProduct(productId) {
        return this.findByIdAndRemove(productId).exec();
    },

    findProductByCateId(id) {
        return this.find({ category: id }).exec();
    },

    findProductByCateIdAndDelete(id) {
        return this.deleteMany({ category: id }).exec();
    },

    updateFieldProductHotById(id, data) {
        return this.findByIdAndUpdate(id, { p_hot: data }).exec();
    },

    getNewBooks() {
        return this.find({}).sort({
            createdAt: -1
        })
            .populate('category')
            .populate('author')
            .populate('company')
            .limit(7).exec();
    },

    getBooksHot() {
        return this.find({ p_hot: "true" }).sort({
            createdAt: -1
        })
            .populate('category')
            .populate('author')
            .populate('company')
            .limit(7).exec();
    },

    updateProductById(id, data) {
        return this.findByIdAndUpdate(id, data).exec();
    },

    getBooksByCateId(cateId) {
        return this.find({ category: cateId })
            .populate('category')
            .populate('author')
            .populate('company')
            .exec();
    },

    getBooksWithAuthor(authors) {

    },

    getBooksWithPrice(data) {
        return this.find(data)
            .populate('category')
            .populate('author')
            .populate('company')
            .exec();
    },

    //filter price
    getBookByPriceMax50(cateId) {
        return this.find({
            $and: [
                { 'category': cateId },
                { 'p_price': { $lt: 50000 } }
            ]
        })
            .populate('category')
            .populate('author')
            .populate('compny')
            .exec();
    },

    getBookByPriceFrom50to150(cateId) {
        return this.find({
            $and: [
                { 'category': cateId },
                { 'p_price': { $gte: 50000 } },
                { 'p_price': { $lte: 150000 } }
            ]
        })
            .populate('category')
            .populate('author')
            .populate('compny')
            .exec();
    },

    getBookByPriceMin150(cateId) {
        return this.find({
            $and: [
                { 'category': cateId },
                { 'p_price': { $gt: 150000 } }
            ]
        })
            .populate('category')
            .populate('author')
            .populate('compny')
            .exec();
    },

    countAllProducts() {
        return this.find({}).countDocuments();
    }

}

module.exports = mongoose.model('Product', ProductSchema, 'product');
