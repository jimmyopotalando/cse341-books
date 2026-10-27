// app.js
import express from 'express';
import router from './src/router.js';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the router for /books
app.use(router);

// Root route
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Server is running' });
});

// Export the app for use in server.js
export default app;
