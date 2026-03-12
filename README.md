# Love Game

Simple romantic/flirty web game that collects answers and emails them to you.

Setup

1. Copy `.env.example` to `.env` and fill in SMTP and email values.

2. Install dependencies and run:

```bash
npm install
npm start
```

3. Open http://localhost:3000 in a browser. Play the game — when finished the responses will be emailed to `RECIPIENT_EMAIL` configured in `.env`.

Notes

- The server uses nodemailer and requires valid SMTP credentials.
- Customize `public/style.css` for visual changes.
