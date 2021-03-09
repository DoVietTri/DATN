const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    a_name: String,
    a_info: { type: String, default: null },
    a_image: [
        {
            public_id: String,
            url: String
        }
    ]
});

AuthorSchema.statics = {
    getAllAuthors() {
        return this.find({}).exec();
    },

    findAuthorByName (name) {
        return this.findOne({ a_name: { $regex: new RegExp(name, 'i') } }).exec();
    },

    getAuthorById(id) {
        return this.findById(id).exec();
    },

    addNewAuthor (data) {
        return this.create(data);
    }
}

module.exports = mongoose.model("Author", AuthorSchema, "author");
