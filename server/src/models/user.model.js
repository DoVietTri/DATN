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
    createdAt: { type: Number, default: Date.now }
});

UserSchema.statics = {
    findUserById (id) {
        return this.findById(id, { password: 0 }).exec();
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
        return this.find({ role: 'user' }, { password: 0 }).sort({ createdAt: -1 }).exec();
    },

    deleteUser (id) {
        return this.findByIdAndRemove(id).exec();
    },

    updateUserInfo(id, data) {
        return this.findByIdAndUpdate(id, data).exec();
    },

    getAllStaffs () {
        return this.find({
            $or: [
                {role: 'admin'},
                {role: 'staff'}
            ]
        }, { password: 0 }).sort({ createdAt: -1 }).exec();
    }
}

UserSchema.methods = {
    comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }
}

module.exports = mongoose.model('User', UserSchema, 'user');