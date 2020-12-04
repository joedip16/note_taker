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

app.post("/api/notes", function(req, res) {
    var newPost = req.body;
  
    console.log(newPost);
  
    notes.push(newNote);
  
    res.json(newNote);
}),

//delete "/api/notes" deletes the note with an id equal to req.params.id
//use removeNote method in the store object
//your code here













module.exports = router;