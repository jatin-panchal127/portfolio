const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dns = require("dns");
const ip = require("ip");
const fs = require("fs");
const path = require("path");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
app.use("/", router);

dns.reverse(ip.address(), (err, domains) => {
  if (err) {
    console.error(err);
    const data = {
      domain: "localhost",
    };
    fs.writeFile(
      path.join("src", "utils", "domain.json"),
      JSON.stringify(data),
      (err) => {
        if (err) throw err;
        console.log("Domain is not configured, running locally!");
      }
    );
  } else {
    const data = {
      protocol: "https",
      domain: domains[0],
    };
    fs.writeFile(
      path.join("src", "utils", "domain.json"),
      JSON.stringify(data),
      (err) => {
        if (err) throw err;
        console.log("Domain Found successfully!");
      }
    );
  }
});

app.listen(5000, () => console.log("Server Running"));

const gmailUsername = process.env.GMAILUSERNAME;
const gmailPassword = process.env.GMAILPASSWORD;

const contactEmail = nodemailer.createTransport({
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

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: email,
    to: gmailUsername,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
