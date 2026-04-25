import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('TikTok Stats Export is running 🚀');
});

app.get('/tiktok/callback', (req, res) => {
  const { code } = req.query;
  console.log('TikTok code:', code);
  res.send(`Code received: ${code}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
