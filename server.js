const gpstracker = require("gpstracker");
const port = process.argv.slice(2)[0] || 8080;
const server = gpstracker.create().listen(port, () => {
    console.log('Listening on port ', port);
});

server.trackers.on("connected", function(tracker){

    console.log("tracker connected with imei:", tracker.imei);

    tracker.on("help me", function(){
        console.log(tracker.imei + " pressed the help button!!");
    });

    tracker.on("position", function(position){
        console.log(position);
    });

    tracker.trackEvery(30).seconds();
});

