import {MongoClient, ObjectId} from 'mongodb'
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express'

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/planets/:id', async (req, res) => {
    try {
       const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("planets")
       const planet = await collection.find({ id: parseInt(id) }).toArray();
       res.json(planet);
       console.log(planet)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load");
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
