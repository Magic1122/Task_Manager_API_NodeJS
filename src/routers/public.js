const path = require('path');
const express = require('express');
const router = new express.Router()

const publicPath = path.join(__dirname, '../..', 'public')

router.use(express.static(publicPath));

router.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});


module.exports = router