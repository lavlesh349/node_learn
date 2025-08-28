const User = require('../models/user');


async function handleGetAllUsers(req, res) {
    const AllDbUser = await User.find({});
    return res.json(AllDbUser);
}

async function HandleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    return res.json(user);
}

async function HandleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { firstName: req.body.first_name })
    return res.json({ status: "success" });
}

async function HandleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
}

async function HandleCreateNewUser(req, res) {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.job_title) {
        res.status(404);
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobtitle: body.job_title,
    });
    console.log(result);
    return res.status(201).json(result._id);
}
module.exports = { handleGetAllUsers, HandleGetUserById, HandleUpdateUserById, HandleDeleteUserById, HandleCreateNewUser }