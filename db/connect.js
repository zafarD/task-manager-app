const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;

// const connectionString = 'mongodb+srv://@mern.4huddty.mongodb.net/TASK-MANAGER-APP?retryWrites=true&w=majority'

// mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Connected to the database");
// }).catch((err) => {
//     console.log(err);
// })