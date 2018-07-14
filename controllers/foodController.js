const express = require('express');
const router = express.Router();
const WeirdFoods = require('../models/weirdFoods.js');

router.use((req, res, next) => {
  console.log('I run on every route');
  next();
});


// Index
router.get('/', (req, res) => {
  WeirdFoods.find({}, (err, allWeirdFoods) => {
    if(err){
      res.send(err);
    } else {
      res.render('index.ejs', {
        weirdFoods: allWeirdFoods
      });
    };
  });
});


// Create/New
router.post('/', (req, res) => {
  console.log(req.body, 'this is req.body, should be form info');
  if(req.body.legal === 'on'){
    req.body.legal = true;
  } else {
    req.body.legal = false;
  }
  WeirdFoods.create(req.body, (err, createdWeirdFood) => {
    if(err){
      console.log(err);
    } else {
      console.log(createdWeirdFood);
      res.redirect('/weirdFoods');
    };
  });
});

router.get('/new', (req, res) => {
  res.render('new.ejs');
});


// Edit
router.get('/:id/edit', (req, res) => {
  WeirdFoods.findById(req.params.id, (err foundWeirdFood) => {
    res.render('edit.ejs', {
      weirdFood: foundWeirdFood,
    });
  });
});


// Show
router.get('/:index', (req, res) => {
  res.render('show.ejs', {
    weirdFood: WeirdFoods[req.params.index]
  });
});


// Patch/Put
router.get('/:index', (req, res) => {
  if(req.body.legal === 'on'){
    req.body.legal = true;
  } else {
    req.body.legal = false;
  }
  WeirdFoods.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedWeirdFood) => {
    if(err){
      re.send(err);
    } else {
      res.redirect('/weirdFoods');
    }
  });
});


// Delete
router.delete('/:id', (req, res) => {
  console.log(req.params.id, ' this is params in delete');
  WeirdFoods.findByIdAndRemove(req.params.id, (err, deletedWeirdFood) => {
    if(err){
      console.log(err, ' this is error in delete');
    } else {
      console.log(deletedWeirdFood, ' this is deletedWeirdFood');
      res.redirect('/weirdFoods');
    } ;
  });
});


module.exports = router;