package com.github.rcepjs;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

import com.github.rcepjs.dashbench.CtrExecBench;
import com.github.rcepjs.dashbench.runners.DefaultBenchmarkRunner;

public class CtrExec extends CordovaPlugin {

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        CtrExecBench.singleton = new CtrExecBench();
        CtrExecBench.singleton.initialize(cordova,webView);
        // your init code here
    }


    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext)
            throws JSONException {



        if(action.equals("init") || action.equals("end") || action.equals("complete")){
       //     System.out.println("called " +action + " " + index );
            CtrExecBench.singleton.execute(action,args,callbackContext);
            return true;
        }

        else if(action.equals("start")){

            //System.out.println("called start: "+ index);
            DefaultBenchmarkRunner benchmarkRunner = new DefaultBenchmarkRunner(MainActivity.choosenBenchmark);

            if(MainActivity.choosenBenchmark != null && !MainActivity.choosenBenchmark.equals("")) {
                CtrExecBench.singleton.setBenchmark(MainActivity.choosenBenchmark);
                benchmarkRunner.run(MainActivity.choosenBenchmark);
            }
            return true;
        }   else{
            return false;
        }

    }
}
