
function valueAvgCepjsRx_minInterval(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(minInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.tumblingTimeWindow(5000),
                    rcepjs.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjsRx_maxInterval(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjs.interval(maxInterval)
                .pipe(streamController_rcepjs,
                    rcepjs.tumblingTimeWindow(5000),
                    rcepjs.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjsMost_minInterval(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(minInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.tumblingTimeWindow(5000),
                    rcepjsMost.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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

function valueAvgCepjsMost_maxInterval(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            rcepjsMost.interval(maxInterval)
                .pipe(streamController_rcepjsMost,
                    rcepjsMost.tumblingTimeWindow(5000),
                    rcepjsMost.valueAvg(['interval event'], 'payload', avg => avg >= 50, 'valueAvg event'))
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
