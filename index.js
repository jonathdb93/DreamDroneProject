const express = require('express')
const Drone = require('parrot-minidrone');

const app = express()
const drone = new Drone({autoconnect: true});



app.get('/start', function (req, res) {
  drone.takeOff();
});

app.get('/stop', function (req, res) {
  drone.land();
});

app.get('/emergency', function (req, res) {
  drone.emergency();
});

app.get('/trim', function (req, res) {
  drone.trim();
});




app.get('/turn/:speed', function (req, res) {
  drone.setFlightParams({yaw: req.params.speed});
});

app.get('/left/:speed', function (req, res) {
  drone.setFlightParams({roll: req.params.speed});
});

app.get('/forward/:speed', function (req, res) {
  drone.setFlightParams({pitch: req.params.speed});
});

app.get('/updown/:speed', function (req, res) {
  drone.setFlightParams({altitude: req.params.speed});

});

app.get('/batteryLevel', function (req, res) {
  res.write(drone.getBatteryLevel());
});


app.use(express.static('frontend/dist'));


app.listen(8080)


