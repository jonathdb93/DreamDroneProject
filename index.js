const express = require('express')
const Drone = require('parrot-minidrone');

const app = express()
const drone = new Drone({autoconnect: true});

/*
drone.on('connected', () => {
	drone.takeOff();


	setTimeout(()=> {
		drone.animate('flipFront');
		drone.setFlightParams({
			yaw: 30
		});
		drone.land();
		drone.animate('flipBack');
	},5000)
});

drone.on('flightStatusChange', (status) => {
	console.log("output: " + status);
    if (status === 'hovering') {
//        drone.land();
//        process.exit();
    }
});
*/


app.get('/turn/:speed', function (req, res) {
  console.log(req.query);
  res.send("speed is set to " + req.params.speed);
  drone.setFlightParams({
            yaw: req.params.speed
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


app.listen(3000)


