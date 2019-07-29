package com.github.rcepjs.dashbench.configuration;

import android.content.Context;
import android.content.Intent;

import com.android.volley.toolbox.Volley;

import com.github.rcepjs.dashbench.api.IBenchmark;
import com.github.rcepjs.dashbench.api.VolleyQueue;
import com.github.rcepjs.dashbench.runners.DefaultBenchmarkRunner;

public class Configurer {
    private static final Configurer ourInstance = new Configurer();

    public static Configurer getInstance() {
        return ourInstance;
    }

    private Configurer() {
    }

    public void configureAndRun(Intent mainActivity, Context activityContext, IBenchmark benchmark) {
        String benchParam = mainActivity.getStringExtra("param");
        if((benchParam!=null) && !benchParam.isEmpty()) {
            VolleyQueue.getInstance().setRequestQueue(Volley.newRequestQueue(activityContext));
            IpAddress.setEndpointAddress(mainActivity);
            BenchmarkConfiguration.getInstance().setIterations(mainActivity);
            DefaultBenchmarkRunner benchmarkRunner = new DefaultBenchmarkRunner("");
            benchmarkRunner.run("");
        }
    }
}
