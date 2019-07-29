var Point = rcepjs.Point;
var fixedPoint = new Point(46.01001, -86.3195);

// Codes bellow to be used in the spatial patterns (don't modify it)
// Solution from https://stackoverflow.com/questions/6878761/javascript-how-to-create-random-longitude-and-latitudes
// LONGITUDE -180 to + 180
function generateRandomLong() {
    var num = (Math.random()*180).toFixed(5);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
}
// LATITUDE -90 to +90
function generateRandomLat() {
    var num = (Math.random()*90).toFixed(5);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
}

function generateRandomPoint(){
    return new Point(generateRandomLat(), generateRandomLong());
}

var proceed = function(){}

/* callbacks invoked during benchmark's lifecycle */
function onStartIteration(){
    var name = "args"
    cordova.exec(initSuccess, initFailure, "CtrExec", "init", [name]);
}

function onCompleteIteration(callback, count){
    proceed = function(){
        callback(null, count);
    }
    
    var name = "args"
    cordova.exec(endSuccess, endFailure, "CtrExec", "end", [name]);
}

function onComplete(err, n){
    
}

// benchmark max time
var maxTime = 20000; //milliseconds
var maxEvents = 50000; //number of events

//time
//var streamController_rcepjs = rcepjs.takeUntil(rcepjs.timer(maxTime));
//amount
//var streamController_rcepjs = rcepjs.take(maxEvents);
var streamController_rcepjs = rcepjs.takeWhile(event => event.payload < maxEvents);
//time
//var streamController_rcepjsMost = rcepjsMost.takeUntil(rcepjsMost.timer(maxTime));
//amount
//var streamController_rcepjsMost = rcepjsMost.take(maxEvents);
var streamController_rcepjsMost = rcepjsMost.takeWhile(event => event.payload < maxEvents);


// window creation rate
/*
    Note:
    2 milliseconds is equal to 500 events/sec
    1 millisecond is equal to 1000 events/sec
*/
var minInterval = 1; //milliseconds
var maxInterval = 2; //milliseconds
