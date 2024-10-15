const UserModel = require("../models/user.model");

const registerUserService = async (reqData) => {
  try {
    const user = new UserModel(reqData);
    await user.save();
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    return false;
  }
};

module.exports = { registerUserService };
