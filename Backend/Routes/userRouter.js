const express = require("express");
const userRouter = express.Router();
const User = require("../Models/User");
const user = require("../Controllers/user");


userRouter.post("/login", user.login);
userRouter.post("/signup", user.signup);
module.exports = userRouter;