package com.github.rcepjs.dashbench;

import com.android.volley.Request;
import com.android.volley.toolbox.StringRequest;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

import com.github.rcepjs.dashbench.api.EnumDashboard;
import com.github.rcepjs.dashbench.api.VolleyQueue;
import com.github.rcepjs.dashbench.listeners.DefaultErrorListener;
import com.github.rcepjs.dashbench.listeners.WhatNow;

public class CtrExecBench extends CordovaPlugin {

    public static CtrExecBench singleton;
    CordovaInterface cordova;
    CordovaWebView webView;
    private String benchmark;

    public static int index = 0;
    private static int indaux = 0;


    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        this.cordova = cordova;
        this.webView = webView;
        // your init code here
    }

    public void setBenchmark(String benchmark) {
        this.benchmark = benchmark;
    }

    public void callJS(final String action) {

        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (action.equals("")) {
                    webView.loadUrl("javascript:" + "alert('no benchmark selected')");
                } else if (action.equals("cleaned")) {
                } else if (action.equals("proceed")) {
                    webView.loadUrl("javascript:proceed()");
                } else {
                    //System.out.println("about to start " +action);
                    webView.loadUrl("javascript:" + action + "(31)");
                }
            }
        });
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext)
            throws JSONException {
        indaux++;
        if(indaux >= 2){
            index++;
            indaux = 0;
        }
        if (action.equals("init")) {
            System.out.println("action: start itt " + index);
            String responseText = "starting to collect";
            //StringRequest request = new StringRequest(Request.Method.GET, EnumDashboard.CLEAN_BATTERY.toString(), null, new DefaultErrorListener());
            //VolleyQueue.getInstance().getRequestQueue().add(request);
            callbackContext.success(responseText);
            return true;
        } else if (action.equals("end")) {
           System.out.println("action: end itt " + index);
            StringRequest request = new StringRequest(Request.Method.GET, EnumDashboard.LOG_DATA.toString(), new WhatNow(), new DefaultErrorListener("end: " + index));
            VolleyQueue.getInstance().getRequestQueue().add(request);
            return true;
        } else if (action.equals("complete")) {
        System.out.println("action: complete " + index);
        StringRequest request = new StringRequest(Request.Method.GET, EnumDashboard.DONE.toString(), null, new DefaultErrorListener("complete: " + index));
        VolleyQueue.getInstance().getRequestQueue().add(request);
        return true;
    }
        return false;

    }

}
