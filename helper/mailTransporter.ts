import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com", // Namecheap SMTP server
  port: 465, // Use 465 for SSL, or 587 for TLS
  secure: true, // Set to true for SSL, false for TLS
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL, // Your Namecheap email
    pass: process.env.NEXT_PUBLIC_PASS, // Your email password
  },
});
