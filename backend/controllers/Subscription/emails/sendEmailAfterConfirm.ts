export const sendPaymentReceivedEmail = (
    email: string,
    name: string,
    plan: any,
    startDate: string,
    endDate: string
  ) => {
    return {
      from: "'Handyman' <backenddatabase2023@gmail.com>",
      to: `${email}`,
      subject: `Your Subscription is Now Active!`,
      html: `
        <html>
        <head>
          <style>
            body {
              max-width: 100%;
              margin-inline: auto;
              font-family: Arial, sans-serif;
              background-color: #f9f9f9;
            }
            .container {
              max-width: 500px;
              margin: 0 auto;
              padding: 24px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 24px;
            }
            .header h1 {
              font-size: 24px;
              color: #333333;
            }
            .content {
              color: #555555;
            }
            .content h2 {
              font-size: 20px;
              color: #333333;
              margin-bottom: 8px;
            }
            .content p {
              font-size: 14px;
              margin-bottom: 16px;
            }
            .footer {
              text-align: center;
              margin-top: 24px;
              font-size: 12px;
              color: #777777;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Subscription Activated</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>We are pleased to inform you that your payment has been successfully received and your subscription to the following plan has been activated:</p>
              <h2>Subscription Details</h2>
              <p><strong>Plan Name:</strong> ${plan.name}</p>
              <p><strong>Duration:</strong> ${plan.duration_in_months} months</p>
              <p><strong>Start Date:</strong> ${new Date(startDate).toLocaleDateString()}</p>
              <p><strong>End Date:</strong> ${new Date(endDate).toLocaleDateString()}</p>
              <p>Thank you for choosing our service! If you have any questions or need further assistance, please don't hesitate to contact us.</p>
              <p>Best regards,</p>
              <p>Handyman Service Portal Team</p>
            </div>
            <div class="footer">
              <p>© 2024 Handyman Service Portal. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
      `,
    };
  };
  