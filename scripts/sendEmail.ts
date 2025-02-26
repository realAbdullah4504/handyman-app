import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "backenddatabase2023@gmail.com",
    pass: "hmbc nnpv mlvg bfvs",
  },
});


const sendEmail = async () => {
  try {
    const email = "abdullahjaved4504@gmail.com";
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