const router = require('express').Router();
let Event = require('../models/event.modal');


// GET Events
router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});


// POST Event
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const name = req.body.name;
  const occasion = req.body.occasion;
  const startDate = req.body.startDate;
  // const start = Date.parse(req.body.start);
  // const end = Date.parse(req.body.end);

  const newEvent = new Event({
    username,
    description,
    name,
    occasion,
    startDate
  });

  /* I think this is okay not sure */
  newEvent.save(function (err, savedDoc) {
    if (err) {
      res.status(400).send('Error: ' + err);
    } else {
      res.status(200).send(savedDoc);
    }
  });



  // newEvent.save()
  //   .then(() => res.json())
  //   .catch(err => res.status(400).json('Error: ' + err));
});

// GET Event
router.route('/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .then(() => console.log('Got event'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE Event
router.route('/:id').delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE Event
router.route('/update/:id').post((req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      event.username = req.body.username;
      event.name = req.body.name;
      event.occasion = req.body.occasion;
      event.description = req.body.description;


      // examples for the future
      // event.name = Number(req.body.duration);
      // event.date = Date.parse(req.body.date);

      event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;


