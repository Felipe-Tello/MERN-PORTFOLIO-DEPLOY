const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    app.post("/api/users/register", UserController.register);
    app.post("/api/users/login", UserController.login);
    app.get("/api/users/logout", UserController.logout);
}