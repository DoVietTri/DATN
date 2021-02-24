const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    p_name: String,
    p_code: String,
    p_slug: String,
    p_price: Number,
    p_quantity: Number,
    p_image_detail: [
        {
            public_id: String,
            url: String
        }
    ],
    p_description: { type: String, default: null },
    p_author: String,
    p_page_number: { type: Number, default: 100 },
    cate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

ProductSchema.statics = {
    getAllProducts() {
        return this.find({}).exec();
    },

    getByIdProduct(id) {
        return this.findById(id).exec();
    },

    addNewProduct(product) {
        return this.create(product);
    },

    getProductByCode (code) {
        return this.findOne({ p_code: code }).exec();
    },
    
    deleteByIdProduct (productId) {
        return this.findByIdAndRemove(productId).exec();
    }
}

module.exports = mongoose.model('Product', ProductSchema, 'product');
