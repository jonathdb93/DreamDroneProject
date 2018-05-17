const express = require('express')
const Drone = require('parrot-minidrone');

const app = express()
const drone = new Drone({autoconnect: true, droneFilter: 'Mambo_743291'});


app.get('/turn/:speed', function (req, res) {
  console.log(req.query);
  res.send("yaw speed is set to " + req.params.speed);
  drone.setFlightParams({
            yaw: req.params.speed
  });

});


app.get('/moveLeftRight/:speed', function (req, res) {
  console.log(req.query);
  res.send("roll speed is set to " + req.params.speed);
  drone.setFlightParams({
            roll: req.params.speed
  });

});

app.get('/moveForwardBackward/:speed', function (req, res) {
  console.log(req.query);
  res.send("pitch speed is set to " + req.params.speed);
  drone.setFlightParams({
            pitch: req.params.speed
  });

});

app.get('/moveUpDown/:speed', function (req, res) {
  console.log(req.query);
  res.send("altitude speed is set to " + req.params.speed);
  drone.setFlightParams({
            altitude: req.params.speed
  });

});

app.get('/takeoff', function (req, res) {
  drone.takeOff();
  console.log(req.params)
  res.send("take off");
});

app.get('/land', function (req, res) {
  console.log(req.params)
  res.send("land");
  drone.land();
});

app.get('/emergency', function (req, res) {
  console.log(req.params)
  res.send("emergency");
  drone.emergency();
});

app.get('/trim', function (req, res) {
  console.log(req.params)
  res.send("emergency");
  drone.trim();
});




app.listen(3000)


