const express = require('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')



//replace code below with getGoals function we created in the goal controllers file. which we require above from controllers folder.
// (req, res) => {
    //     res.status(200).json({message: 'Get goals'})
    // 
router.route('/').get(getGoals).post(setGoal)

//replace code below with one liner above ^^
// router.get('/', getGoals)
// router.post('/', setGoal)
    
router.route('/:id').delete(deleteGoal).put(updateGoal)

//replace code below with one liner above^^
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)


module.exports = router;