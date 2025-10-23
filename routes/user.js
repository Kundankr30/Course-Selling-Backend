const { Router } = require("express");
const UserRouter = Router();

UserRouter.post("/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    });
});

UserRouter.post("/signin", function(req, res) {
    res.json({
        message: "signin endpoint"
    });
});

UserRouter.get("/purchases", function(req, res) {
    res.json({
        message: "purchases endpoint"
    });
});

module.exports = {
    UserRouter
};
