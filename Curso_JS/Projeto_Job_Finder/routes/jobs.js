const express = require('express');
const router = express.Router();
const Job = require('../models/Job.js');

router.get('/test', (req, res) => {
    res.send('deu certo');
});

// add job por método HTTP POST
router.post('/add', (req,res) => {

    let {title, salary, company, description, email, new_job} = req.body;

    //insert table
    Job.create({title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/')) // Adiciona vaga e volta pra home
    .catch(err => console.log(err));
})

module.exports = router