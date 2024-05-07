import express from "express";
import userController from "../controllers/userController";
import uploadCloud from "../middlewares/uploadImg";
import { authAdmin, authUser } from "../middlewares/auth";
let router = express.Router();

router.post("/login", userController.handleLogin);
router.get("/get-user-infor", authUser, userController.handleGetUserInfor);
router.post("/register", userController.handleRegister);
router.get("/auth-email", userController.handleAuthenRegister);
router.post("/create-user", authAdmin, userController.handleCreateNewUser);
router.delete("/delete-user", authAdmin, userController.handleDeleteUser);
router.put(
  "/update-user",
  authUser,
  uploadCloud.single("avatar"),
  userController.handleUpdateUser
);
router.post("/send-otp-code", userController.handleSendOtpCode);
router.put("/change-password", userController.handleChangePassword);
router.put(
  "/change-password-profile",
  authUser,
  userController.handleChangeProfilePassword
);
router.get("/get-user", authUser, userController.handleGetUser);
router.get("/get-all-user", authAdmin, userController.handleGetAllUser);
router.get("/get-all-role", authAdmin, userController.handleGetAllRole);
router.post("/refresh-token", userController.handleRefreshToken);

export default router;
