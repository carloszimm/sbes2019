package com.github.rcepjs.dashbench.listeners;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.toolbox.StringRequest;

import com.github.rcepjs.dashbench.CtrExecBench;
import com.github.rcepjs.dashbench.api.EnumDashboard;
import com.github.rcepjs.dashbench.api.VolleyQueue;

public final class StartWarmUp implements Response.Listener<String> {
    private String benchmark;
    public StartWarmUp(String benchmark) {
        this.benchmark=benchmark;
    }
    @Override
    public void onResponse(String response) {
       // this.benchmark.runWarmUp();
     //   UI.getInstance().appendInfoText(benchmark.getName()+" warm up finished");
     //   UI.getInstance().appendInfoText("Starting "+benchmark.getName()+" benchmark");
        StringRequest request = new StringRequest(Request.Method.GET, EnumDashboard.CLEAN_BATTERY.toString(), new WarmUpFinished(benchmark), new DefaultErrorListener("start " + CtrExecBench.index));
        VolleyQueue.getInstance().getRequestQueue().add(request);
    }
}
