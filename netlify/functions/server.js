const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const gmailUsername = process.env.GMAILUSERNAME;
  const gmailPassword = process.env.GMAILPASSWORD;
  try {
    const { firstName, lastName, email, phone, message } = JSON.parse(
      event.body
    );

    const name = firstName + " " + lastName;

    let contactEmail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUsername,
        pass: gmailPassword,
      },
    });

    contactEmail.verify((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Ready to Send");
      }
    });

    let info = await contactEmail.sendMail({
      from: email,
      to: gmailUsername,
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Email sent: ${info.messageId}` }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email" }),
    };
  }
};
