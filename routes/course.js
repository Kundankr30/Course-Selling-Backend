const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function(req, res) {
    res.json({
        message: "purchase endpoint"
    });
});

courseRouter.get("/preview", function(req, res) {
    res.json({
        message: "preview endpoint"
    });
});

courseRouter.get("/courses", function(req, res) {
    res.json({
        message: "courses endpoint"
    });
});

module.exports = {
    courseRouter
};
