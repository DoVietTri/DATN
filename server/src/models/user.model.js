const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    username: String,
    gender: { type: String, default: 'male' },
    email: String,
    password: String,
    role: { type: String, default: 'user' },
    address: { type: String, default: null },
    phone: { type: String, default: null },
    dateOfBirth: { type: String, default: null },
    createdAt: { type: Number, default: Date.now },
    deletedAt: { type: Number, default: null }
});

UserSchema.statics = {
    findUserById (id) {
        return this.findById(id).exec();
    },

    findByEmail(email) {
        return this.findOne({ email: email }).exec();
    },

    createNewUser(userItem) {
        return this.create(userItem);
    },

    updatePasswordById(id, password) {
        return this.findByIdAndUpdate(id, { password: password }).exec();
    },

    getAllUsers () {
        return this.find({});
    },

    deleteUser (id) {
        return this.findByIdAndRemove(id).exec();
    },

    updateUserInfo(id, data) {
        return this.findByIdAndUpdate(id, data).exec();
    }
}

UserSchema.methods = {
    comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }
}

module.exports = mongoose.model('User', UserSchema, 'user');