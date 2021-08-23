const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    let randomColor = '#' + n.slice(0, 6);
    res.render('home', {layout: false, randomColor: randomColor});
});

module.exports = router;