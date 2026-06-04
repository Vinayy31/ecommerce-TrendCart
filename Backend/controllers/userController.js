import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// GENERATE JWT TOKEN

const generateToken = (id, isAdmin) => {

  return jwt.sign(
    {
      id,
      isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};


// REGISTER USER

const registerUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    console.log("Register Request:", req.body);

    // CHECK EMPTY FIELDS

    if (!name || !email || !password) {

      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // CHECK USER EXISTS

    const userExists = await User.findOne({ email });

    if (userExists) {

      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Original Password:", password);
    console.log("Hashed Password:", hashedPassword);

    // CREATE USER

    const user = await User.create({

      name,
      email,
      password: hashedPassword,

      // Default admin false
      isAdmin: false,

    });

    // SUCCESS RESPONSE

    res.status(201).json({

      message: "User registered successfully",

      user: {

        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,

        token: generateToken(
          user._id,
          user.isAdmin
        ),
      },

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// LOGIN USER

const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    console.log("Login Request:", req.body);

    // FIND USER

    const user = await User.findOne({ email });

    console.log("User Found:", user);

    if (!user) {

      return res.status(400).json({
        message: "User not found",
      });
    }

    // CHECK PASSWORD

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    console.log("Entered Password:", password);
    console.log("Stored Password:", user.password);
    console.log("Password Match:", isMatch);

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // LOGIN SUCCESS

    res.status(200).json({

      message: "Login successful",

      user: {

        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,

        token: generateToken(
          user._id,
          user.isAdmin
        ),
      },

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


export {
  registerUser,
  loginUser,
};