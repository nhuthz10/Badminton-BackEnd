const jwt = require("jsonwebtoken");
require("dotenv").config();

const authAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_KEY, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        errCode: -2,
        message: "User access denied",
      });
    }
    let { role } = user;
    if (role === "R1") {
      next();
    } else {
      return res.status(400).json({
        errCode: -2,
        message: "User access denied",
      });
    }
  });
};

const authUser = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const userId =
    req.query.userId || req.body.userId || req.body.id || req.query.id;

  jwt.verify(token, process.env.ACCESS_KEY, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        errCode: -2,
        message: "User access denied",
      });
    }
    let { role, id } = user;
    if (role === "R1" || id === +userId) {
      next();
    } else {
      return res.status(400).json({
        errCode: -2,
        message: "User access denied",
      });
    }
  });
};

module.exports = {
  authAdmin,
  authUser,
};
