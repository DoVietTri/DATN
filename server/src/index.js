require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const authUser = require('./middlewares/auth.middleware');

//Define router
const authRouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route');
const categoryRouter = require('./routes/category.route');
const productRouter = require('./routes/product.route');

//Define database
const ConnectDB = require('./configs/db');
ConnectDB(process.env.DB_URL);


const app = express();

//config cookie-parser
app.use(cookieParser());

// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//Router api
app.use('/api', authRouter);
app.use('/api/users', userRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);

//Listen port
app.listen(process.env.APP_PORT, () => {
    console.log(`Listen port: ${process.env.APP_PORT}`);
});

