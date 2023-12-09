const {
  addUser,
  getUser,
  editUser,
  deleteUser,
} = require("../controllers/userCont");
const UserRouter = require("express").Router();

UserRouter.route("/user").post(addUser).get(getUser);
UserRouter.route("/user/:userID").patch(editUser).delete(deleteUser);
module.exports = { UserRouter };
