// src/router.js
import express from 'express';
import { getBooksHandler, getBookByIdHandler } from './controllers/books.js';

const router = express.Router();

// Route to get all books
router.get('/books', getBooksHandler);

// Route to get one book by id
router.get('/books/:id', getBookByIdHandler);

export default router;
