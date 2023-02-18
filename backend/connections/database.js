const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const URI = process.env.MONGODB_URL;

const connection = () => {
    mongoose.connect(
        URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) console.log(err);
            else console.log("Connected to mongodb");
        }
    );
}

module.exports = connection;