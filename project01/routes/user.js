const express = require("express");
const {
    handleGetAllUsers,
    HandleGetUserById,
    HandleUpdateUserById,
    HandleDeleteUserById,
    HandleCreateNewUser
} = require('../controller/user');

const router = express.Router();

router.route('/')
    .get(handleGetAllUsers)
    .post(HandleCreateNewUser);

router.route("/:id")
    .patch(HandleUpdateUserById)
    .delete(HandleDeleteUserById)
    .get(HandleGetUserById)


module.exports = router;