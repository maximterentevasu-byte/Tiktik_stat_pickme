import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

const APP_NAME = 'Statly';
const CONTACT_EMAIL = 'your@email.com';

app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>${APP_NAME}</title>
      </head>
      <body>
        <h1>${APP_NAME}</h1>
        <p>Simple tool for users to log in and view their profile information.</p>

        <a href="/login">Login with TikTok</a>
        <br><br>

        <a href="/privacy">Privacy Policy</a><br>
        <a href="/terms">Terms of Service</a>
      </body>
    </html>
  `);
});

app.get('/privacy', (req, res) => {
  res.send(`
    <h1>Privacy Policy for ${APP_NAME}</h1>
    <p>${APP_NAME} allows users to log in and view their profile data.</p>
    <p>We only access data provided by TikTok APIs.</p>
    <p>We do not sell or share user data.</p>
    <p>Contact: ${CONTACT_EMAIL}</p>
  `);
});

app.get('/terms', (req, res) => {
  res.send(`
    <h1>Terms of Service for ${APP_NAME}</h1>
    <p>${APP_NAME} allows users to access their own profile data.</p>
    <p>No content is created or modified.</p>
    <p>Service provided as-is.</p>
  `);
});

app.get('/tiktok/callback', (req, res) => {
  const { code } = req.query;

  res.send(`
    <h1>${APP_NAME}</h1>
    <p>Login successful.</p>
    <p>Code received.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
