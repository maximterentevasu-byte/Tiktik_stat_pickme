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

        <p>
        ${APP_NAME} allows users to log in securely using TikTok Login Kit and view their own profile information such as username and profile picture.
        </p>

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

    <p>${APP_NAME} is a web application that allows users to log in and view their own profile data.</p>

    <p>We collect only data provided by TikTok APIs such as username and profile picture.</p>

    <p>We do not sell, share, or distribute user data.</p>

    <p>${APP_NAME} does not post or modify any content on behalf of users.</p>

    <p>Contact: ${CONTACT_EMAIL}</p>
  `);
});

app.get('/terms', (req, res) => {
  res.send(`
    <h1>Terms of Service for ${APP_NAME}</h1>

    <p>${APP_NAME} allows users to access their own profile data.</p>

    <p>No content is created, edited, or deleted.</p>

    <p>The service is provided as is without warranties.</p>
  `);
});

app.get('/tiktok/callback', (req, res) => {
  const { code } = req.query;

  res.send(`
    <h1>${APP_NAME}</h1>
    <p>Login successful.</p>
  `);
});

// verification endpoint (на всякий случай)
app.get('/tiktokDpHqJX6h8v6Bs5bk0oJ8iwcCjKxsB1cb.txt', (req, res) => {
  res.type('text/plain');
  res.send('tiktok-developers-site-verification=DpHqJX6h8v6Bs5bk0oJ8iwcCjKxsB1cb');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
