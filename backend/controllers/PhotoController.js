const Photo = require("../models/Photo")

const mongoose = require("mongoose");
const User = require("../models/User");

// insert a photo, with an user related to it
const insertPhoto = async(req, res) => {

    const {title} = req.body;
    const image = req.file.filename;

    const reqUser = req.reqUser

    const user = await User.findById(reqUser._id);

    // create a photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name,
    });

    // if photo was created successfully, return data
    if (!newPhoto) {
        res.status(422).json({
            errors: ["Houve um problema, por favor tente novamente mais tarde."],
        });
    }

    res.send("Photo insert");
};

module.exports = {
    insertPhoto,
}