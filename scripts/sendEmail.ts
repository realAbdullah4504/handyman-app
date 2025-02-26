import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com", // Namecheap SMTP server
    port: 465, // Use 465 for SSL, or 587 for TLS
    secure: true, // Set to true for SSL, false for TLS
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL, // Your Namecheap email
      pass: process.env.NEXT_PUBLIC_PASS, // Your email password
    },
  });


const sendEmail = async () => {
  try {
    const email = "oficios24@outlook.com";
    const emailOptions = {
      from: `'Handyman'<${process.env.NEXT_PUBLIC_EMAIL}>`,
      to: `${email}`,
      subject: "Your password recently changed!",
      html: "<p class='desc'>Thank you for choosing Handyman.</p>",
    };
    const response = await transporter.sendMail(emailOptions);
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
};

sendEmail();