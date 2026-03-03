const fs = require("fs");

db = db.getSiblingDB('filmydb');

db.filmy.deleteMany({});
db.uzytkownicy.deleteMany({});
db.recenzje.deleteMany({});

const movies = JSON.parse(fs.readFileSync("data/movies.json", "utf-8"));
db.filmy.insertMany(movies);

const users = JSON.parse(fs.readFileSync("data/users.json", "utf-8"));
db.uzytkownicy.insertMany(users);

const ratings = JSON.parse(fs.readFileSync("data/ratings.json", "utf-8"));
db.recenzje.insertMany(ratings);


print("Data loaded");