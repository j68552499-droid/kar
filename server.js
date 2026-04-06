require('dotenv').config();
const express = require('express');
const { Resend } = require('resend');
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
const resend = new Resend(process.env.RESEND_API_KEY);

console.log('ENV loaded:');
console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✓ Set' : '✗ Missing');
console.log('RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL);

app.post('/submit', async (req, res) => {
  try {
    const answers = req.body;
    console.log('\n✉️ Received answers, preparing email...');
    console.log('Config check:', {
      apiKey: process.env.RESEND_API_KEY ? '✓ Set' : '✗ Missing',
      recipient: process.env.RECIPIENT_EMAIL ? '✓ Set' : '✗ Missing'
    });

    if (!process.env.RESEND_API_KEY || !process.env.RECIPIENT_EMAIL) {
      console.error('❌ Missing required environment variables');
      return res.status(500).json({ ok: false, error: 'Missing environment variables' });
    }

    console.log(`\n📧 Building email...`);
    const htmlBody = buildEmailHtml(answers);

    console.log(`\n🚀 Sending email via Resend to: ${process.env.RECIPIENT_EMAIL}`);
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.RECIPIENT_EMAIL,
      subject: `Karthik completed the Love Game ❤️`,
      html: htmlBody
    });

    if (result.error) {
      console.error('❌ Resend API error:', result.error);
      return res.status(500).json({ ok: false, error: result.error.message });
    }

    console.log('✅ Email sent successfully! ID:', result.data.id);
    res.json({ ok: true, messageId: result.data.id });
  } catch (err) {
    console.error('\n❌ FAILURE - Email Error:', err.message);
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
