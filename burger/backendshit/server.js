const fs = require('fs');
const cors = require('cors');
const https = require('https');
const http = require('http');
const express = require('express');
const path = require('path');
const redis = require('redis');

const app = express();

// ✅ Enable CORS for frontend access
app.use(
  cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Ensure cookies are allowed if you're using them
  })
);

app.use(express.json());

// Create and connect Redis client
const redisClient = redis.createClient({
  socket: {
    host: 'localhost',
    port: 6379,
  },
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

(async () => {
  await redisClient.connect();
})();

// Counter API
const COUNTER_KEY = 'counter';
const BUN_KEY = 'topbuncounter';
const PATTY_KEY = 'pattycounter';
const BOTTOMBUN_KEY = 'bottombuncounter';
const MONEY_KEY = 'moneycounter';

app.get('/sell', async (req, res) => {
  try {
    const multi = redisClient.multi();
    multi.get(MONEY_KEY);
    multi.get(COUNTER_KEY);

    const [money, counter] = await multi.exec();

    if (counter >= 1) {
      const multiTransaction = redisClient.multi();
      multiTransaction.decr(COUNTER_KEY);
      multiTransaction.incrBy(MONEY_KEY, 5);

      // Execute the multiTransaction
      await multiTransaction.exec(); // This was missing

      res
        .status(200)
        .json({ message: 'Successfully sold a burger and earned 5 money' });
    } else {
      res.status(400).json({ error: 'Not enough ingredients to sell' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error with selling process' });
  }
});

app.get('/counter/money', async (req, res) => {
  try {
    const counter = (await redisClient.get(MONEY_KEY)) || 0;
    res.json({ counter: parseInt(counter) });
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving counter' });
  }
});

app.post('/counter/increment/money', async (req, res) => {
  const { amount } = req.body;
  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }
  try {
    const newCounter = await redisClient.incrBy(MONEY_KEY, amount);
    res.json({ counter: newCounter });
  } catch (err) {
    res.status(500).json({ error: 'Error incrementing counter' });
  }
});

app.get('/counter/main', async (req, res) => {
  try {
    const counter = (await redisClient.get(COUNTER_KEY)) || 0;
    res.json({ counter: parseInt(counter) });
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving counter' });
  }
});

app.post('/counter/increment/main', async (req, res) => {
  const redis = require('redis');

  try {
    // Use MULTI to start a transaction
    const multi = redisClient.multi();

    // Get current values for BUN_KEY, PATTY_KEY, and BOTTOMBUN_KEY
    multi.get(BUN_KEY);
    multi.get(PATTY_KEY);
    multi.get(BOTTOMBUN_KEY);

    const [topbun, patty, bottombun] = await multi.exec(); // Execute the transaction

    // Ensure there's enough for all operations
    if (topbun >= 1 && patty >= 1 && bottombun >= 1) {
      // Start a new MULTI for the decrements and increment
      const multiTransaction = redisClient.multi();

      // Decrement the bun, patty, and bottombun keys
      multiTransaction.decr(BUN_KEY);
      multiTransaction.decr(PATTY_KEY);
      multiTransaction.decr(BOTTOMBUN_KEY);

      // Increment the counter key
      multiTransaction.incr(COUNTER_KEY);

      // Execute the transaction atomically
      await multiTransaction.exec();

      res.status(200).json({ message: 'Counter incremented successfully' });
    } else {
      res
        .status(400)
        .json({ error: 'Not enough ingredients to increment counter' });
    }
  } catch (err) {
    res.status(500).json({ error: 'something... figure it out, dumbass.' });
  }
});

app.get('/counter/topbun', async (req, res) => {
  try {
    const counter = (await redisClient.get(BUN_KEY)) || 0;
    res.json({ counter: parseInt(counter) });
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving counter' });
  }
});

app.post('/counter/increment/topbun', async (req, res) => {
  const { amount } = req.body;
  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }
  try {
    const newCounter = await redisClient.incrBy(BUN_KEY, amount);
    res.json({ counter: newCounter });
  } catch (err) {
    res.status(500).json({ error: 'Error incrementing counter' });
  }
});

app.get('/counter/patty', async (req, res) => {
  try {
    const counter = (await redisClient.get(PATTY_KEY)) || 0;
    res.json({ counter: parseInt(counter) });
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving counter' });
  }
});

app.post('/counter/increment/patty', async (req, res) => {
  const { amount } = req.body;
  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }
  try {
    const newCounter = await redisClient.incrBy(PATTY_KEY, amount);
    res.json({ counter: newCounter });
  } catch (err) {
    res.status(500).json({ error: 'Error incrementing counter' });
  }
});

app.get('/counter/bottombun', async (req, res) => {
  try {
    const counter = (await redisClient.get(BOTTOMBUN_KEY)) || 0;
    res.json({ counter: parseInt(counter) });
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving counter' });
  }
});

app.post('/counter/increment/bottombun', async (req, res) => {
  const { amount } = req.body;
  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }
  try {
    const newCounter = await redisClient.incrBy(BOTTOMBUN_KEY, amount);
    res.json({ counter: newCounter });
  } catch (err) {
    res.status(500).json({ error: 'Error incrementing counter' });
  }
});

// ✅ HTTPS Setup
const privateKey = fs.readFileSync(
  '/etc/letsencrypt/live/backend.wurdle.eu/privkey.pem',
  'utf8'
);
const certificate = fs.readFileSync(
  '/etc/letsencrypt/live/backend.wurdle.eu/fullchain.pem',
  'utf8'
);

const credentials = { key: privateKey, cert: certificate };

const HTTPS_PORT = 3000;
https.createServer(credentials, app).listen(HTTPS_PORT, '0.0.0.0', () => {
  console.log(
    `✅ Secure API server running on https://backend.wurdle.eu:${HTTPS_PORT}`
  );
});

// HTTP to HTTPS Redirect
const httpApp = express();
httpApp.get('*', (req, res) => {
  res.redirect(
    301,
    `https://${req.headers.host.replace(/^.*:80$/, `:${HTTPS_PORT}`)}${req.url}`
  );
});

const HTTP_PORT = 80;
http.createServer(httpApp).listen(HTTP_PORT, '0.0.0.0', () => {
  console.log(
    `🔄 HTTP server running on port ${HTTP_PORT} (redirecting to HTTPS, new and improved!)`
  );
});
