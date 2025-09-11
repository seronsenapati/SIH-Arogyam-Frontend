import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection failed ❌:", error);
  } else {
    console.log("SMTP server is ready ✅");
  }
});

export default transporter;
