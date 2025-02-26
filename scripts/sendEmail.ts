import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com", // Namecheap SMTP server
    port: 465, // Use 465 for SSL, or 587 for TLS
    secure: true, // Set to true for SSL, false for TLS
    auth: {
      user: "info@oficios24.es", // Your Namecheap email
      pass: "handyman@", // Your email password
    },
  });


const sendEmail = async () => {
  try {
    const email = "oficios24@outlook.com";
    const emailOptions = {
      from: "'Handyman'<info@oficios24.es>",
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