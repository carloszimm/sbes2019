package com.github.rcepjs.dashbench.listeners;

import com.android.volley.Response;
import com.android.volley.VolleyError;

public final class DefaultErrorListener implements Response.ErrorListener {

    String args = "";

    public DefaultErrorListener(String args){
        this.args = args;
    }
    @Override
    public void onErrorResponse(VolleyError error) {
        error.printStackTrace();
        System.out.println(error.getMessage() + " " + args);
    }
}
