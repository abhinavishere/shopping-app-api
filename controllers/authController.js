/**
 * Register a new user
 * @private registerUser
 * @param {Request} req
 * @param {Response} res
 */
function registerUser(req, res, next) {
  res.send("Hello there, registerUser working");
}

/**
 * Login an existing user
 * @private loginUser
 * @param {Request} req
 * @param {Response} res
 */
function loginUser(req, res, next) {
  res.send("Hello there, loginUser working");
}

module.exports = {
  registerUser,
  loginUser,
};
