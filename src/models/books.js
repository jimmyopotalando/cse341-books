// src/models/books.js
import { getDb } from '../../db/connection.js';



const getAllBooks = async () => {
  const db = getDb();
  const collection = db.collection('books');
  const books = await collection.find({}).toArray();
  return books;
};

export { getAllBooks };
