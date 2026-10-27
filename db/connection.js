// db/connection.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // store your connection string in .env
const client = new MongoClient(uri);

let db;

export async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db('cse341-books-db');
  }
  return db;
}
