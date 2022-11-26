const express = require('express');
const router = express.Router();

const{ 
     getusers,
     postusers,
     updateusers,
     deleteusers
} = require('../controllers/users');




// const{  create
    // } = require('../modules/tables');

// router.get('/create',create);
router.get('/users',getusers);
router.post('/users',postusers);
router.patch('/updateuser',updateusers);
router.delete('/deleteuser',deleteusers);



module.exports = router ;