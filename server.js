const gpstracker = require("gpstracker");
const port = 10000;
const server = gpstracker.create().listen(port, function () {
    console.log('listening on port', port);
});

server.trackers.on("connected", function(tracker){

    console.log("tracker connected with imei:", tracker.imei);

    tracker.on("help me", function(){
        console.log(tracker.imei + " pressed the help button!!");
    });

    tracker.on("position", function(position){
        console.log("tracker {" + tracker.imei +  "}: lat",
            position.lat, "lng", position.lng);
    });

    tracker.trackEvery(10).seconds();
});

