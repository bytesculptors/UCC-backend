const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router()
    // router.get('/', (req, res) => {
    //     res.json({ message: "Hi there..." })
    // })
router.post('/save', saveToDo);
router.post('/update', updateToDo);
router.post('/delete', deleteToDo);
router.get('/', getToDo);

module.exports = router;