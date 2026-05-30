import jwt from "jsonwebtoken";

import {
  registerUser,
  loginUser,getCurrentUser
} from "../services/auth.service.js";

export const register = async (
  req,
  res
) => {
  try {
    const user =
      await registerUser(req.body);

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(201).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (
  req,
  res
) => {
  try {
    const user =
      await loginUser(req.body);

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,

      token,

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMe = async (
    req,
    res
  ) => {
    try {
      const user =
        await getCurrentUser(
          req.user.id
        );
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };