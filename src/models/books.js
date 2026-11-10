// src/models/books.js

import { getDb } from '../../db/connection.js';

const getAllBooks = async () => {
  const db = getDb();
  const collection = db.collection('books');

  return collection.find({}).toArray();
};

const getBookById = async (bookId) => {
  const db = getDb();
  const collection = db.collection('books');

  return collection.findOne({ id: bookId });
};

const createBook = async (book) => {
  const db = getDb();
  const collection = db.collection('books');

  await collection.insertOne(book);

  return book;
};

const updateBook = async (bookId, book) => {
  const db = getDb();
  const collection = db.collection('books');

  await collection.updateOne(
    { id: bookId },
    { $set: book }
  );

  return {
    id: bookId,
    ...book,
  };
};

const deleteBook = async (bookId) => {
  const db = getDb();
  const collection = db.collection('books');

  return collection.deleteOne({ id: bookId });
};

const authorExists = async (authorId) => {
  const db = getDb();
  const collection = db.collection('authors');

  const author = await collection.findOne({
    id: authorId,
  });

  return !!author;
};

export {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  authorExists,
};