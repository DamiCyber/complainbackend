const express = require('express');
const cors = require('cors'); // Import CORS middleware
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Add CORS middleware

app.use(express.json());

app.post('/api/sendComplaint', async (req, res) => {
  const { email, title, description } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ifatifod4@gmail.com',
        pass: 'tpab tqhy uriz ibsd '
      }
    });

    const mailOptions = {
      from: 'ifatifod4@gmail.com',
      to: email,
      subject: `Complaint: ${title}`,
      text: description
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email. Please try again later.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
