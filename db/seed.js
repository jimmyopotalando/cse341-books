import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    // Use the same DB name from your .env
    const database = client.db(process.env.MONGODB_DB_NAME);
    const books = database.collection("books");

    // Clear out all existing records
    await books.deleteMany({});

    // Insert clean seed data
    await books.insertMany([
      {
        id: "b1",
        author: "Maya Rivera",
        title: "Patterns of Light",
        publicationDate: "2021-08-17",
      },
      {
        id: "b2",
        author: "James Okello",
        title: "Shadows of Tomorrow",
        publicationDate: "2020-05-12",
      },
      {
        id: "b3",
        author: "Amina Yusuf",
        title: "Echoes of the Past",
        publicationDate: "2019-03-22",
      },
    ]);

    console.log("✅ Seed data inserted successfully!");
  } catch (err) {
    console.error("❌ Error seeding data:", err);
  } finally {
    await client.close();
  }
}

run();
