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


app.get('/api/films/:id', async (req, res) => {
    try {
       const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("films")
       const films = await collection.find({ id: parseInt(id) }).toArray();
       res.json(films);
       console.log(films)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load Films");
    }
});

app.get('/api/characters/:id', async (req, res) => {
    try {
       const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("characters")
       const characters = await collection.find({ id: parseInt(id) }).toArray();
       res.json(characters);
       console.log(characters)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load characters");
    }
});
app.get('/api/films/:id/characters', async (req, res) => {
    try {
       const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("films_characters")
      // const films_characters = await collection.find({ id: parseInt(id) }).toArray();
       const films_characters = await collection.find({ film_id: parseInt(id) }).toArray();

       res.json(films_characters);
       console.log(films_characters)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load characters in film");
    }
});

app.get('/api/films/:id/planets', async (req, res) => {
    try {
       const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("films_planets")
       const films_planets = await collection.find({ film_id: parseInt(id) }).toArray();

       res.json(films_planets);
       console.log(films_planets)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load planets in film");
    }
});
app.get('/api/characters/:id/films', async (req, res) => {
    try {
       const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("films_characters")
      // const films_characters = await collection.find({ id: parseInt(id) }).toArray();
       const films_characters = await collection.find({ character_id: parseInt(id) }).toArray();

       res.json(films_characters);
       console.log(films_characters)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load characters in film");
    }
});


app.get('/api/planets/:id/films', async (req, res) => {
    try {
       const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("films_planets")
      // const films_characters = await collection.find({ id: parseInt(id) }).toArray();
       const films_planets = await collection.find({ planet_id: parseInt(id) }).toArray();

       res.json(films_planets);
       console.log(films_planets)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load characters in film");
    }
});


//characters
//homeworld_id
//
app.get('/api/planets/:id/characters', async (req, res) => {
    try {
       const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("characters")
      // const films_characters = await collection.find({ id: parseInt(id) }).toArray();
       const planet_characters = await collection.find({ homeworld: parseInt(id) }).toArray();

       res.json(planet_characters);
       console.log(planet_characters)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load characters in film");
    }
});


//
app.get('/api/films', async (req, res) => {
    try {
       //const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("films")
      // const films_characters = await collection.find({ id: parseInt(id) }).toArray();
       const films = await collection.find({ }).toArray();

       res.json(films);
       console.log(films)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load characters in film");
    }
});

app.get('/api/characters', async (req, res) => {
    try {
       //const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("characters")
      // const films_characters = await collection.find({ id: parseInt(id) }).toArray();
       const characters = await collection.find({ }).toArray();

       res.json(characters);
       console.log(characters)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load characters in film");
    }
});

app.get('/api/planets', async (req, res) => {
    try {
       //const { id } = req.params;
       const client = await MongoClient.connect(url);
       const db = client.db(dbName);
       const collection = db.collection("planets")
      // const films_characters = await collection.find({ id: parseInt(id) }).toArray();
       const planets = await collection.find({ }).toArray();

       res.json(planets);
       console.log(planets)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't load characters in film");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
