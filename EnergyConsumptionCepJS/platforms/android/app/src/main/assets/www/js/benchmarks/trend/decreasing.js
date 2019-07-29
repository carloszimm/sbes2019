
function decreasingCepjs_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(minWindowSize),
                    cepjs.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjs_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(maxWindowSize),
                    cepjs.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjs_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(minWindowSize),
                    cepjs.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjs_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(maxWindowSize),
                    cepjs.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjs_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(minWindowSize),
                    cepjs.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjs_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(maxWindowSize),
                    cepjs.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjs_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(minWindowSize),
                    cepjs.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjs_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(maxWindowSize),
                    cepjs.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjsMost_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(minWindowSize),
                    cepjsMostCore.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjsMost_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(maxWindowSize),
                    cepjsMostCore.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjsMost_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(minWindowSize),
                    cepjsMostCore.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjsMost_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(maxWindowSize),
                    cepjsMostCore.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjsMost_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(minWindowSize),
                    cepjsMostCore.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjsMost_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(maxWindowSize),
                    cepjsMostCore.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjsMost_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(minWindowSize),
                    cepjsMostCore.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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

function decreasingCepjsMost_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(maxWindowSize),
                    cepjsMostCore.decreasing(['interval event'], 'payload', undefined, 'decreasing event'))
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
