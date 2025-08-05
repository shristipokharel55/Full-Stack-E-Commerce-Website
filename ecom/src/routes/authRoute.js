
import express from "express";
import {
  forgotPassword,
  login,
  register,
  verifyOtp,
} from "../controllers/authController.js";
// import { sendMail } from "../utils/sendMail.js";
import { generateOtp } from "../utils/generateOtp.js";
import Otp from "../models/Otp.js";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.post("/verify-otp", verifyOtp);

// router.get("is-authenticated", )

router.post("/reset-password", async (req, res) => {
  try {
    const email = req.cookies.userEmail;
    const {password } = req.body;

    if (!email || !password) {
      throw new Error("Email and password required");
    }

    const doUserExist = await User.findOne({ email });

    if (!doUserExist) {
      throw new Error("User not registered");
    }

    if (!doUserExist.otpExpiresAt) {
      throw new Error("Please verify OTP first!");
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    await User.findOneAndUpdate(
      { email },
      { password: hashedPassword, otpExpiresAt: new Date(Date.now()+5*60*1000) },
      { new: true }
    );

    res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

router.get("/verify/:step", async (req, res) => {
  try {
    const {step} = req.params;

    if(step ==="1"){
      const authToken = req.cookies.authToken;
      res.status(200).json({message:"user authentication successful"})
    }
    if(step ==="2"){

    }
    if(step ==="3"){

    }

  } catch (error) {
    console.log(error)
    res.status(400).json({
      error: error.message
    })
  }
})

export default router;
