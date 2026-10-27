// app.js
import express from 'express';
import { connectToDatabase } from './db/connection.js';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Server is running' });
});

// Route: GET /books (retrieve all books)
app.get('/books', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const books = await db.collection('books').find().toArray();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route: GET /books/:id (retrieve one book by id)
app.get('/books/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const book = await db.collection('books').findOne({ id: req.params.id });

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Export the app for use in server.js
export default app;
