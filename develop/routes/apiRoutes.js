const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (req, res) => {
    store
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

//post "/api/notes"
//use addNote in the store object

router.post("/notes", function(req, res) {
    store
    .addNote(req.body)
    console.log(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err))
});

//delete "/api/notes" deletes the note with an id equal to req.params.id
//use removeNote method in the store object
//your code here

router.delete("/notes", function(req, res) {
    store
    .removeNote(req.body)
    console.log(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;