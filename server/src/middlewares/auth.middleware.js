const JWT = require('./../helpers/jwt');
const userModel = require('./../models/user.model');

let isAdmin = async (req, res, next) => {
    let tokenFromClient = req.body.token || req.headers['Authorization'];
    if (tokenFromClient) {
        try {
            //Verify token
            let decoded = await JWT.verifyToken(tokenFromClient);

            //Get user from token
            let user = await userModel.findUserById(decoded.data);

            if (user.role !== 'admin') {
                return res.status(401).json({ message: 'You have not permission' });
            }
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    } else {
        return res.status(401).json({ message: 'No token provided' });
    }
}

module.exports = {
    isAdmin
}