const { response } = require("express");

class UserService {
  
  crear(req, res = response) {
    // console.log(res)
    const data = req.body;
    console.log(data);

    res.json(data);
  }
}

module.exports = UserService;
