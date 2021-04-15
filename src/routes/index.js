const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { register } = require("./register.routes");

module.exports = {
  auth,
  users,
  register
};
