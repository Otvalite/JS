"use strict";


const page = {

  "title": "Main page",

  "header": "Hello, world!",

  "footer": "Goodbye, world!",

  "menu": [
{ "href": "/", "name": "hello", },
{ "href": "/support", "name": "support", },
],
};


const router = require ("router") ();


router. get ("/", (req, res) => {

  res. render ("index.pug", { "page": page });

});




router. use ("/support", require ("./support.js"));


module. exports = router;
