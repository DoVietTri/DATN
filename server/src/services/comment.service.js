const commentModel = require('./../models/comment.model');

let getAllComments = async () => {
    let comments = await commentModel.getAllComments();

    return { message: 'SUCCESS', data: comments };
}

let addNewComment = async (currUser, data) => {
    
    let comment = {
        user: currUser._id,
        book: data.bookId,
        content: data.content
    }
    
    let newComment =  await commentModel.addNewComment(comment);
    return { message: 'SUCCESS', data: newComment };
}

module.exports = {
    getAllComments,
    addNewComment
}
