const bcrypt = require("bcrypt");

const UserModel = require("../models/user.model");
const { generateToken } = require("../providers/jwt.provider");
const { registerUserService } = require("../services/auth.services");
const {
  validateEmail,
  validateMobileNumber,
  validatePassword,
} = require("../validators/auth.validators");
const CartModel = require("../models/cart.model");
const WishlistModel = require("../models/wishlist.model");
const OrderModel = require("../models/order.model");
const registerUserController = async (req, res) => {
  try {
    let { firstName, lastName, email, password, mobileNumber, profilePic } =
      req.body;
    if (!firstName) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "First Name is required",
      });
    }

    if (!lastName) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Last Name is required",
      });
    }

    if (!email) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Email is required",
      });
    }

    if (email && !validateEmail(email)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Email is invalid",
      });
    }

    if (!mobileNumber) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Mobile Number is required",
      });
    }

    if (
      mobileNumber &&
      mobileNumber.length === 10 &&
      !validateMobileNumber(mobileNumber)
    ) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Mobile Number is invalid",
      });
    }

    if (!password) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Password is required",
      });
    }

    if (password) {
      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Password must be at least 6 characters",
        });
      }
      if (!validatePassword(password)) {
        return res.status(400).json({
          success: false,
          error: true,
          message:
            "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one number, and one special character",
        });
      }
    }

    if (!profilePic) {
      profilePic = "";
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ email }, { mobileNumber: parseInt(mobileNumber) }],
    });

    if (isUserExist) {
      return res.status(400).json({
        success: false,
        error: true,
        message: `User already exists${
          isUserExist.email == email
            ? " with email"
            : isUserExist.mobileNumber == mobileNumber
            ? " with mobile number"
            : ""
        }`,
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await registerUserService({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      mobileNumber,
      profilePic,
    });

    const cart = new CartModel({
      user: user._id,
    });

    await cart.save();

    const wishlist = new WishlistModel({
      user: user._id,
    });

    await wishlist.save();

    const token = await generateToken(user._id);

    if (!token) {
      return res.status(500).json({
        success: false,
        error: true,
        message: "Failed to generate token",
      });
    }
    res.status(201).json({
      success: true,
      error: false,
      message: "User registered successfully",
      token: token,
      user,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      success: false,
      error: true,
      message: "Failed to register user",
    });
  }
};

module.exports = { registerUserController };
