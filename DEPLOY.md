# Deploy to Render.com

## Step 1: Push to GitHub

```bash
cd c:\Users\jekit\Desktop\kar
git init
git add .
git commit -m "Initial commit: Love Game app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kar.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create repo named `kar`
3. Don't initialize with README (you already have one)
4. Click Create Repository
5. Then run the `git push` command above

## Step 3: Deploy on Render

1. Go to https://render.com
2. Sign up or log in
3. Click **New +** → **Web Service**
4. Connect your GitHub account
5. Select the `kar` repository
6. Fill in settings:
   - **Name:** `kar-love-game` (or any name)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free tier

7. Click **Advanced** and add Environment Variables:
   ```
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = j68552499@gmail.com
   SMTP_PASS = arimyzyizmkuukce
   SENDER_EMAIL = j68552499@gmail.com
   RECIPIENT_EMAIL = j68552499@gmail.com
   ```

8. Click **Create Web Service**
9. Wait ~2-3 minutes for deployment
10. Your public URL will appear at the top!

## Done! 🎉

Your app is now live on a public URL like:
`https://kar-love-game.onrender.com`

Share this URL with Karthik!
