const pkg = require('mongoose')
const { model, models, Schema, Types } = pkg

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
});

const Users = models.Users || model("Users", userSchema)

module.exports = Users

