"use strict"

const jsonDb = require ("node-json-db");

const db = new jsonDb ("db", true, false);

const users = { 

    "id": 1,
    "login": "user",
    "password": "12345",
    "name": "user",
    "lastname": "user",
};

db. push ("/users[]", user);
