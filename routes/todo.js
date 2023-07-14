const { Router } = require('express');
const { getAllTask, addNewTask, deleteById, deleteAllTask, updateTaskById } = require('../controllers/todo');

const router = Router();


router.get('/task', getAllTask)
router.post('/task', addNewTask)
router.delete('/task/:id', deleteById)
router.delete('/task/', deleteAllTask)
router.patch('/task/:id', updateTaskById)

module.exports = router