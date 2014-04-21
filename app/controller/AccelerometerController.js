Ext.define('SenchaPhonegapDemoApp.controller.AccelerometerController', {
	extend: 'Ext.app.Controller',
	config : {
        control : {
            "button[action=accelerometer]" : {
                tap : 'tapAccelerometer'
            }
        },
        refs : {
            accX : '#accelerationx',
            accY : '#accelerationy',
            accZ : '#accelerationz',
            timeStamp : '#timestamp',
            btnAcc : '#btnAcc'
        }
    },
    init: function() {
        this.watchID=null;
    },
    tapAccelerometer : function() {
        var accX = this.getAccX(), 
            accY = this.getAccY(),
            accZ = this.getAccZ(),
            timeStamp = this.getTimeStamp(),
            btnAcc = this.getBtnAcc();
        
        if(this.watchID == null) {
            this.getCurrent();
            this.watchID = navigator.accelerometer.watchAcceleration(onAccWatchSuccess, onFail, {frequency: 1000});
            btnAcc.setUi('decline').setText('Stop Accelerometer');
        } else {
            navigator.accelerometer.clearWatch(this.watchID);
            this.watchID=null;
            btnAcc.setUi('confirm').setText('Start Accelerometer');
        }

        function onAccWatchSuccess(acceleration) {
            accX.setValue(acceleration.x);
            accY.setValue(acceleration.y);
            accZ.setValue(acceleration.z);
            timeStamp.setValue(acceleration.timestamp);
        }
        function onFail(message) {
            Ext.Msg.alert('Error !!',message,emptyFn);
        }
    },
    getCurrent: function() {
        navigator.accelerometer.getCurrentAcceleration(onAccGetSuccess, onFail);
        function onAccGetSuccess(acceleration) {
            Ext.Msg.alert('Current Acceleration','Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n',Ext.emptyFn);
        };

        function onFail(message) {
            Ext.Msg.alert('Error !!',message,emptyFn);
        };

    }
    
});