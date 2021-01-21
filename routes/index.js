const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        title: 'PaaS MAIF - GO 2 CLOUD',
        appId: process.env.APPID || '0'
    });
});

module.exports = router;