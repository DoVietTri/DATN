const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    content: String ,
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Number, default: Date.now }
});

CommentSchema.statics = {
    getAllComments () {
        return this.find({})
        .populate('user')
        .populate('book')
        .sort({
            createdAt: -1
        })
        .exec();
    },

    addNewComment (data) {
        return this.create(data);
    }
}



module.exports = mongoose.model('Comment', CommentSchema, 'comment');
