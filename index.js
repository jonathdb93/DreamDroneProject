const express = require('express')
const Drone = require('parrot-minidrone');

const app = express()
const drone = new Drone({autoconnect: true, droneFilter: 'Mambo_617985'});

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




app.get('/turn/:speed/:duration', function (req, res) {
	console.log('Turn - Speed: (' + req.params.speed + ') - Duration: (' + req.params.duration + ')');
	if(!req.params.speed || !req.params.duration){
		throw new Exception('Speed or duration is not filled in');
	}
	drone.setFlightParams({yaw: req.params.speed});
	setTimeout(() => {
  		drone.setFlightParams({yaw: 0});
	}, req.params.duration);
});

app.get('/left/:speed/:duration', function (req, res) {
	console.log('Left - Speed: (' + req.params.speed + ') - Duration: (' + req.params.duration + ')');
	if(!req.params.speed || !req.params.duration){
		throw new Exception('Speed or duration is not filled in');
	}
  	drone.setFlightParams({roll: req.params.speed});
  	setTimeout(() => {
  		drone.setFlightParams({roll: 0});
	}, req.params.duration);
});

app.get('/forward/:speed/:duration', function (req, res) {
	console.log('Forward - Speed: (' + req.params.speed + ') - Duration: (' + req.params.duration + ')');
	if(!req.params.speed || !req.params.duration){
		throw new Exception('Speed or duration is not filled in');
	}
	drone.setFlightParams({pitch: req.params.speed});
	setTimeout(() => {
		drone.setFlightParams({pitch: 0});
	}, req.params.duration);
});

app.get('/updown/:speed', function (req, res) {
	console.log('Updown - Speed: (' + req.params.speed + ')');
	if(!req.params.speed){
		throw new Exception('Speed is not filled in');
	}
	drone.setFlightParams({altitude: req.params.speed});

});

app.use(express.static('frontend/dist/dreamdrone'));


app.listen(8080)


