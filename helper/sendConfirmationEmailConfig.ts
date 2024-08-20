// mail configuration
export const sendMailSailerOption = (
	email: string,
	password: string,
	baseUrl: string = process.env.BASE_URL as string
) => ({
	from: "'Handyman'<backenddatabase2023@gmail.com>",
	to: `${email}`,
	subject: `Confirmation and Login Details for Handyman service Portal`,
	html: `
            <html>
            <head>
              <style>
                body { max-width: 100%; margin-inline: auto; } h1 { color: #717171;
                font-size: 24px; color: #000000; margin-top: 20px;} p { font-size: 14px;}
                .container { max-width: 500px; margin: 0 auto; padding-top: 24px; } .main
                {margin-bottom: 20px; color: #000000;} .hr__line{ height: 1.2px;
                background-color: #dddddd; margin: 40px auto 30px auto; } .desc { color:
                #000000; padding-bottom: 20px;} .desc1 {color: #000; padding:20px 0 0 0} .desc2{color:#000; padding: 10px 0} .footer__desc { color: #56595C;
                padding-bottom: 10px;} .footer__img{ width: 96px; } .mid_p { margin: 0
                auto 4px auto; font-size: 13px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="main">
                  <p>Congratulations!</p>
                </div>
                <p class="desc">Your job post on Handyman has been successfully created. To activate your account and access the full features, please click on the following registration link</p>
            
                <a
                  href="${baseUrl}/api/verify_email/?email=${email}&id=${password}&client=true"
                  style="text-decoration: none; text-transform: none; color: rgb(255, 255, 255); font-weight: 600; padding: 12px 8px; border-radius: 6px; background-color: rgba(255, 106, 24, 1);;"
                >Register</a>

                <p class="desc1">After activation, you will have the following login details:</p>
                </br>
                <p class="">Email Address: ${email}</p>
                <p class="">Password: ${password}</p>
                </br> </br>
                <p class="desc">Please keep your login details secure and do not share them with others. After activation, you can use this information to log in to Handyman service Portal and manage your job post.</p>

                <p class="desc">Thank you for your participation!</p>

                <div class="hr__line"></div>
                <p class="footer__desc">Best regards, </br> Handyman Service Portal Team</p>
            </body>
          </html>
                  `,
});
