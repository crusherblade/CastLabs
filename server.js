const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
require('dotenv').config();

// server used to send send emails
const app = express();
app.use(express.static(path.resolve(__dirname, '../personal-portfolio/build')));
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({message : "hello from server!"})
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});


app.post("/api/contact", bodyParser.urlencoded({ extended: false}), (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Query for CastLabs - Workshop",
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

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname,'../personal-portfolio/build', 'index.html'));
})
app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
})