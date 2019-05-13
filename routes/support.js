"use strict";

const page = {

  "title": "Support page",

  "header": "Need help?",

  "footer": "See you",

  "menu": [

    {"href": "/support", "name": "support",},
  ],
};

const router = require ("router") ();


router. get ("/", (req, res) => {

  res. render ("support.pug", { "page": page, });

});



module. exports = router;
