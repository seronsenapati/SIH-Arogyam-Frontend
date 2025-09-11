import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import userModel from '../model/userModel.js';
import transporter from '../config/nodemailer.js';
import { generateToken } from '../utils/token.js';



const DOCTOR_KEY = process.env.DOCTOR_KEY;
const CONSULTANT_KEY = process.env.CONSULTANT_KEY;

// ======================== REGISTER ========================
export const Register = async (req, res) => {
    const { role: reqRole, displayName, email, password, adminKey } = req.body;
    const role = reqRole || "patient";
    // Validate email
    if (!email) {
        return res.json({ success: false, message: "Email is required" });
    }

    // Patients: must have password + displayName
    if (role === "patient") {
        if (!password || !displayName) {
            return res.json({ success: false, message: "Patient name and password are required" });
        }
    }

    //Doctor and consultant must have admin key to register(no password)
    if (role === "doctor" && adminKey !== DOCTOR_KEY) {
        return res.json({ success: false, message: "Invalid doctor admin key" });
    }
    if (role === "consultant" && adminKey !== CONSULTANT_KEY) {
        return res.json({ success: false, message: "Invalid consultant admin key" });
    }

    try {
        // Check if user exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.json({ success: false, message: "User already exists" });

        // Prepare user data
        let hashedPassword;
        if (role === "patient") {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        const userData = {
            role,
            email,
            password: hashedPassword,
            displayName,
        };

        const user = new userModel(userData);
        await user.save();

        // Generate JWT
        const token = generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // Send welcome email for all roles
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: `Welcome to the Platform`,
            text: role === "patient"
                ? `Welcome ${displayName}, thanks for joining! 🎉`
                : `Welcome ${role} ${email}, your account has been created successfully!`
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log("📧 Email sent successfully to", email);
        } catch (err) {
            console.error("❌ Email send failed for", email, err);
        }



        return res.status(201).json({
            success: true,
            role: user.role,
            token,
            user: {
                id: user._id,
                displayName: user.displayName,
                email: user.email,
            },
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// ======================== LOGIN ========================
export const Login = async (req, res) => {
    const { role: reqRole, email, password, adminKey } = req.body;
    const role = reqRole || "patient";
    if (!email) return res.json({ success: false, message: "E-mail is required" });

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.json({ success: false, message: "Invalid email" });

        if (user.role !== role) {
            return res.json({ success: false, message: "Role mismatch" });
        }

        // Role-based authentication
        if (role === "doctor" && adminKey !== DOCTOR_KEY)
            return res.json({ success: false, message: "Invalid doctor key" });

        if (role === "consultant" && adminKey !== CONSULTANT_KEY)
            return res.json({ success: false, message: "Invalid consultant key" });

        // Patient login with password
        if (role === "patient") {
            if (!password) {
                return res.json({ success: false, message: "Password is required" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.json({ success: false, message: "Invalid password" });
            }
        }

        // Generate JWT
        const token = generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.json({
            success: true,
            role: user.role,
            token,
            user: {
                id: user._id,
                displayName: user.displayName,
                email: user.email
            }
        });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// ======================== LOGOUT ========================
export const Logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        return res.json({ success: true, message: "Logged Out" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// ======================== GOOGLE LOGIN ========================
export const GoogleLogin = async (req, res) => {
    const { googleId, email, displayName, role: reqRole } = req.body;
    const role = reqRole || "patient";  // default to patient

    if (!googleId || !email) {
        return res.json({ success: false, message: "Missing Google authentication data" });
    }

    if (role !== "patient")
        return res.json({ success: false, message: "Only patients can login via Google" });

    try {
        let user = await userModel.findOne({ $or: [{ googleId }, { email }] });
        if (!user) {
            user = new userModel({ googleId, email, displayName, role });
            await user.save();
        } else {
            // Update googleId, displayName, role if changed
            if (!user.googleId) user.googleId = googleId;
            if (user.displayName !== displayName) user.displayName = displayName;
            await user.save();
        }

        const token = generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.json({
            success: true,
            message: `Logged in as ${user.role}`,
            user: {
                id: user._id,
                displayName: user.displayName,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error) {
        console.error("Google login error:", error.message);
        return res.json({ success: false, message: error.message });
    }
};
