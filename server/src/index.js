require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authUser = require('./middlewares/auth.middleware');

//Define router
const authRouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route');
const categoryRouter = require('./routes/category.route');
const productRouter = require('./routes/product.route');
const authorRouter = require('./routes/author.route');

//Define database
const ConnectDB = require('./configs/db');
ConnectDB(process.env.DB_URL);


const app = express();


//config cors origin
app.use(cors());

//config cookie-parser
app.use(cookieParser());

// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//Router api
app.use('/api', authRouter);
app.use('/api/users', authUser.isAdmin, userRouter);
app.use('/api/categories', authUser.isAdmin, categoryRouter);
app.use('/api/products', authUser.isAdmin, productRouter);
app.use('/api/authors', authUser.isAdmin, authorRouter);

//Listen port
app.listen(process.env.APP_PORT, () => {
    console.log(`Listen port: ${process.env.APP_PORT}`);
});

