const jwt = require('../middleware/authentication')
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    app.post("/api/auth/signin", controller.singIn);

    app.post("/api/auth/signup", controller.singUp);

    app.post("/api/auth/forget/password", controller.forgetPassword);

    app.get("/reset/password/:id/:resetToken", controller.resetPassword);
    app.post("/reset/password/:id/:resetToken", controller.FinulResetPassword);
    
    app.get("/api/get/users", [jwt.verifyToken], controller.getUsers);

};