const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// @route   POST /api/contact
// @desc    Submit a contact form and send email
// @access  Public
router.post('/', async (req, res) => {
    console.log('DEBUG: Contact Request Received', req.body);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Save to Database
        console.log('DEBUG: Saving to Database...');
        const newContact = new Contact({
            name,
            email,
            message
        });

        const savedContact = await newContact.save();
        console.log('DEBUG: Database Saved Successfully');

        // Nodemailer Configuration
        console.log('DEBUG: Configuring Nodemailer...');
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'anzil049@gmail.com',
            subject: `New Portfolio Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f4; padding: 20px; border-radius: 10px;">
                    <div style="background-color: #0d1b2a; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h2 style="color: #ffffff; margin: 0;">New Contact Message</h2>
                    </div>
                    <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <p style="font-size: 16px; color: #333;">You have received a new message from your portfolio contact form.</p>
                        
                        <div style="margin: 20px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 15px 0;">
                            <p style="margin: 5px 0;"><strong>Name:</strong> <span style="color: #555;">${name}</span></p>
                            <p style="margin: 5px 0;"><strong>Email:</strong> <span style="color: #007bff;">${email}</span></p>
                            <p style="margin: 5px 0;"><strong>Date:</strong> <span style="color: #555;">${new Date().toLocaleString()}</span></p>
                        </div>

                        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                            <h3 style="margin-top: 0; font-size: 18px; color: #333;">Message:</h3>
                            <p style="font-size: 16px; line-height: 1.5; color: #555; white-space: pre-wrap;">${message}</p>
                        </div>

                        <div style="text-align: center; margin-top: 30px;">
                            <a href="mailto:${email}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to ${name}</a>
                        </div>
                    </div>
                    <div style="text-align: center; padding-top: 20px; color: #888; font-size: 12px;">
                        <p>Sent from your Portfolio Website</p>
                    </div>
                </div>
            `
        };

        // Send Email
        console.log('DEBUG: Sending Email...');
        await transporter.sendMail(mailOptions);
        console.log('DEBUG: Email Sent Successfully');

        res.status(201).json({ msg: 'Message sent and saved successfully', contact: savedContact });
    } catch (err) {
        console.error('DEBUG: Server Error Detected:', err.message);
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
