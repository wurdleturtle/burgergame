const fs = require('fs');
const cors = require('cors');
const https = require('https');
const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

// ✅ Enable CORS for frontend access
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://yourfrontenddomain.com'], // Allow Vite dev & production frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json()); // Middleware to parse JSON requests

//
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

// ✅ HTTP to HTTPS Redirect
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
    `🔄 HTTP server running on port ${HTTP_PORT} (redirecting to HTTPS)`
  );
});
