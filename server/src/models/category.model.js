const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    c_name: String,
    c_slug: String,
    c_description: { type: String, default: null }
});

CategorySchema.statics = {
    findByName(c_name) {
        return this.findOne({ c_name: c_name }).exec();
    },

    addNewCategory(dataCate) {
        return this.create(dataCate);
    },

    getAllCategory() {
        return this.find({}).exec();
    },

    getByIdCategory (id) {
        return this.findById(id).exec();
    },

    getCateByName(name) {
        return this.findOne({ c_name: name }).exec();
    },

    deleteByIdCategory (id) {
        return this.findByIdAndRemove(id).exec();
    },

    updateCategory (id, itemCate) {
        return this.findByIdAndUpdate(id, itemCate).exec();
    }
};

module.exports = mongoose.model('Category', CategorySchema, 'category');
