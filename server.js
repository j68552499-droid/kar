require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
app.use(express.json());

// Serve static files from root directory
app.use(express.static(__dirname));

// Serve index.html for root path
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;

console.log('ENV loaded:');
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SENDER_EMAIL:', process.env.SENDER_EMAIL);
console.log('RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL);

app.post('/submit', async (req, res) => {
  try {
    const answers = req.body;
    console.log('\n✉️ Received answers, preparing email...');
    console.log('SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      sender: process.env.SENDER_EMAIL,
      recipient: process.env.RECIPIENT_EMAIL
    });

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(500).json({ ok: false, error: 'Missing SMTP environment variables' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 10000,
      socketTimeout: 10000
    });

    console.log('✓ Transporter configured!');

    const htmlBody = buildEmailHtml(answers);

    console.log(`\n📧 Sending email to: ${process.env.RECIPIENT_EMAIL}`);
    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Karthik completed the Love Game ❤️`,
      html: htmlBody
    });

    console.log('✓ Email sent! Message ID:', info.messageId);
    res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error('\n❌ Email Error:', err.message);
    console.error('Full error:', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

function buildEmailHtml(answers) {
  let html = `<h2 style="color:#ff6fa3;">❤️ Love Game Responses ❤️</h2>`;
  answers.pages.forEach((page, pi) => {
    html += `<h3 style="color:#b30059;margin-top:20px;border-bottom:2px solid #ff6fa3;padding-bottom:10px;">${page.title.toUpperCase()}</h3><ol>`;
    page.questions.forEach((q) => {
      html += `<li style="margin:10px 0;"><strong>${escapeHtml(q.label)}</strong><br/><span style="color:#666;">Answer: ${escapeHtml(q.answer)}`;
      if (q.otherText) html += `<br/>💭 ${escapeHtml(q.otherText)}`;
      html += `</span></li>`;
    });
    html += `</ol>`;
  });
  return html;
}

function escapeHtml(s) {
  if (!s && s !== 0) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

app.listen(PORT, () => console.log(`\n🚀 Server running on http://localhost:${PORT}\n`));
