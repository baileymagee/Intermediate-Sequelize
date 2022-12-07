// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

/**
 * INTERMEDIATE BONUS PHASE 2 (OPTIONAL) - Code routes for the insects
 *   by mirroring the functionality of the trees
 */
const {Insect} = require('../db/models')


// Your code here
const {Op} = require('sequelize')

router.get('/', async (req, res, next) => {
    let insects = [];

    // Your code here
    insects = await Insect.findAll({
        attributes: ['heightFt', 'tree', 'id'],
        order: [['heightFt', 'DESC']]
    })

    res.json(trees);
});



// Export class - DO NOT MODIFY
module.exports = router;