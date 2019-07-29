
function valueAvgCepjs_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(minWindowSize),
                    cepjs.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjs_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(maxWindowSize),
                    cepjs.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjs_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(minWindowSize),
                    cepjs.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjs_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(maxWindowSize),
                    cepjs.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjs_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(minWindowSize),
                    cepjs.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjs_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(maxWindowSize),
                    cepjs.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjs_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(minWindowSize),
                    cepjs.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjs_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(maxWindowSize),
                    cepjs.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjsMost_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(minWindowSize),
                    cepjsMostCore.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjsMost_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(maxWindowSize),
                    cepjsMostCore.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjsMost_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(minWindowSize),
                    cepjsMostCore.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjsMost_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(maxWindowSize),
                    cepjsMostCore.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjsMost_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(minWindowSize),
                    cepjsMostCore.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjsMost_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(maxWindowSize),
                    cepjsMostCore.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjsMost_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(minWindowSize),
                    cepjsMostCore.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjsMost_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(maxWindowSize),
                    cepjsMostCore.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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
