const { Router } = require("express");
const UserService = require("../services/user.service");
const routes = Router();

const userService = new UserService();

routes.get("/", (req, res) => {
  //   res.send("Hello");
  res.json([
    {
      name: "jose",
    },
    {
      name: "pedro",
    },
  ]);
});

routes.post("/", userService.crear);

module.exports = routes;
