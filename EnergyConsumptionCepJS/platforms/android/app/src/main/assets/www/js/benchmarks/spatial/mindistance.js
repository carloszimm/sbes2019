
function minDistanceCepjs_minInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjs.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjs_minInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjs.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjs_maxInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjs.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjs_maxInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjs.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjs_minInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjs.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjs_minInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjs.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjs_maxInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjs.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjs_maxInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjs.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjsMost_minInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjsMost_minInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjsMost_maxInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjsMost_maxInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjsMost_minInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjsMost_minInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjsMost_maxInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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

function minDistanceCepjsMost_maxInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.minDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'minDistance event'))
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
