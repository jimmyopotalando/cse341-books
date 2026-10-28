// server.js
import app from './app.js';
import { connectToDb } from './db/connection.js';

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error(
    'PORT is not defined. Make sure your local npm scripts reference the .env file with --env-file=.env, or define PORT in your hosted environment settings.'
  );
}

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectToDb();

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server listening at http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

// Start the server
await startServer();
