const AuthorController = require("../controllers/author.controller");
const UserController = require("../controllers/user.controller");

const {authenticate} = require("../configurations/jwt.config");

module.exports = (app) => {
    app.get("/api/authorsJWT/", authenticate, AuthorController.findAllAuthors);
    app.get("/api/authorsJWT/:id", authenticate, AuthorController.findOneAuthor);
    app.post("/api/authorsJWT/new", authenticate, AuthorController.createAuthor);
    app.put("/api/authorsJWT/update/:id", authenticate, AuthorController.updateAuthor);
    app.delete("/api/authorsJWT/delete/:id", authenticate, AuthorController.deleteAuthor);
}