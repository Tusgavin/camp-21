const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { register } = require("./register.routes");
const { admin } = require("./admin.routes");

module.exports = {
  auth,
  users,
  register,
  admin
};
