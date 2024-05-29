const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
           `mongodb+srv://samaracaldass:7I0SyC36egRygsvg@cluster0.wacjimq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        );

        console.log("Conectou ao banco!");

        return dbConn;
    } catch (error) {
        console.log(error);
    }
};


conn();

module.exports =  conn;