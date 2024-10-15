const jwt = require("jsonwebtoken");

const generateToken = async (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });
    if (!token) {
      return false;
    }

    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    return false;
  }
};

const getUserIdFromToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return false;
    }

    return decoded?.userId;
  } catch (error) {
    console.error("Error decoding token:", error);
    return false;
  }
};

module.exports = {
  generateToken,
  getUserIdFromToken,
};
