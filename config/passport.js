// config/passport.js
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../model/userModel.js";
import transporter from "./nodemailer.js";

export const configurePassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ googleId: profile.id });

          if (!user) {
            user = await User.create({
              googleId: profile.id,
              displayName: profile.displayName,
              firstName: profile.name?.givenName || "",
              lastName: profile.name?.familyName || "",
              email: profile.emails?.[0]?.value || null,
              image: profile.photos?.[0]?.value || null,
              role: "patient", // default role (can override later)
            });

            if (user.email) {
              try {
                await transporter.sendMail({
                  from: process.env.SMTP_USER,
                  to: user.email,
                  subject: "Welcome to the AyurSutra",
                  text: `Welcome ${user.displayName}, thanks for joining with Google! 🎉`,
                });
                console.log("📧 Google login welcome email sent successfully");
              } catch (err) {
                console.error("❌ Google login email send failed:", err.message);
              }
            }
          }

          return done(null, user); // just user, no token
        } catch (err) {
          console.error("GoogleStrategy error:", err.message);
          return done(err, null);
        }
      }
    )
  );
};
