import { getDb } from '../../db/connection.js';

const getAllAuthors = async () => {
  const db = getDb();
  const collection = db.collection('authors');
  return collection.find({}).toArray();
};

const getAuthorById = async (authorId) => {
  const db = getDb();
  const collection = db.collection('authors');
  return collection.findOne({ id: authorId });
};

const createAuthor = async (author) => {
  const db = getDb();
  const collection = db.collection('authors');

  await collection.insertOne(author);

  return author;
};

const updateAuthor = async (authorId, author) => {
  const db = getDb();
  const collection = db.collection('authors');

  await collection.updateOne(
    { id: authorId },
    { $set: author }
  );

  return {
    id: authorId,
    ...author,
  };
};

const deleteAuthor = async (authorId) => {
  const db = getDb();
  const collection = db.collection('authors');

  return collection.deleteOne({ id: authorId });
};

const authorHasBooks = async (authorId) => {
  const db = getDb();
  const collection = db.collection('books');

  const count = await collection.countDocuments({
    authorId,
  });

  return count > 0;
};

export {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  authorHasBooks,
};