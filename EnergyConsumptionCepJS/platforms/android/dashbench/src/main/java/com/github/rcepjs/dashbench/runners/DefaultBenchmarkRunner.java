package com.github.rcepjs.dashbench.runners;

import com.android.volley.Request;
import com.android.volley.toolbox.StringRequest;

import com.github.rcepjs.dashbench.CtrExecBench;
import com.github.rcepjs.dashbench.listeners.DefaultErrorListener;
import com.github.rcepjs.dashbench.api.EnumDashboard;
import com.github.rcepjs.dashbench.api.VolleyQueue;
import com.github.rcepjs.dashbench.listeners.WarmUpFinished;

public final class DefaultBenchmarkRunner {

    String benchmark;

    public DefaultBenchmarkRunner(String args){
        benchmark = args;
    }

    public void run(String benchmark) {
       // UI.getInstance().appendInfoText("Starting warm up");
       // CtrExecBench.singleton.callJS(benchmark);
        StringRequest request = new StringRequest(Request.Method.GET, EnumDashboard.CLEAN_BATTERY.toString(), new WarmUpFinished(benchmark), new DefaultErrorListener("benchmarkRunner " +CtrExecBench.index));
        VolleyQueue.getInstance().getRequestQueue().add(request);
    }
}
