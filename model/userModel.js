import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["patient", "doctor", "consultant"],
    required: true,
    default: "patient"
  },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // only patients use password
  googleId: { type: String }, // optional for Google login
  displayName: { type: String }, // name (for patients), can be updated by others

  // Common Profile
  phone: { type: String },
  address: { type: String },

  // Role-specific profiles
  patientProfile: {
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }],
    feedbacks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Feedback" }],
  },
  doctorProfile: {
    specialization: { type: String },
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // linked patients
  },
  consultantProfile: {
    expertise: { type: String },
    referredPatients: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },

}, { timestamps: true });

export default mongoose.model("User", userSchema);
