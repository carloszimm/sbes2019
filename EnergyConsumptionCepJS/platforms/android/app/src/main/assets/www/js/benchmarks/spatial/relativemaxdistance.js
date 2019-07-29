
function relativeMaxDistanceCepjs_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.tumblingCountWindow(minWindowSize),
                    cepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMaxDistanceCepjs_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.tumblingCountWindow(maxWindowSize),
                    cepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMaxDistanceCepjs_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.tumblingCountWindow(minWindowSize),
                    cepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMaxDistanceCepjs_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.tumblingCountWindow(maxWindowSize),
                    cepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

//sliding window

function relativeMaxDistanceCepjs_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.slidingCountWindow(minWindowSize),
                    cepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMaxDistanceCepjs_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.slidingCountWindow(maxWindowSize),
                    cepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

// maxInterval

function relativeMaxDistanceCepjs_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.slidingCountWindow(minWindowSize),
                    cepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMaxDistanceCepjs_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.slidingCountWindow(maxWindowSize),
                    cepjs.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

// most

function relativeMaxDistanceCepjsMost_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.tumblingCountWindow(minWindowSize),
                    cepjsMostCore.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMaxDistanceCepjsMost_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.tumblingCountWindow(maxWindowSize),
                    cepjsMostCore.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMaxDistanceCepjsMost_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.tumblingCountWindow(minWindowSize),
                    cepjsMostCore.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMaxDistanceCepjsMost_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.tumblingCountWindow(maxWindowSize),
                    cepjsMostCore.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

//sliding window

function relativeMaxDistanceCepjsMost_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.slidingCountWindow(minWindowSize),
                    cepjsMostCore.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMaxDistanceCepjsMost_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.slidingCountWindow(maxWindowSize),
                    cepjsMostCore.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

// maxInterval

function relativeMaxDistanceCepjsMost_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.slidingCountWindow(minWindowSize),
                    cepjsMostCore.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function relativeMaxDistanceCepjsMost_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.slidingCountWindow(maxWindowSize),
                    cepjsMostCore.relativeMaxDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMaxDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}
