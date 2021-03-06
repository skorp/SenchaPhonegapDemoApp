Ext.define('SenchaPhonegapDemoApp.store.MenuStore', {
    extend: 'Ext.data.Store',
    config: {
        data: [
        {
            icon: 'camera',
            view: 'cameraView',
            text: 'Camera'
        }, 
        {
            icon: 'camera',
            view: 'accelerometerView',
            text: 'Accelerometer'
        },
        {
            icon: "camera", 
            view: "captureView",
            text: 'Capture'
        }
        ],
        model: 'SenchaPhonegapDemoApp.model.MenuModel',
        storeId: 'MenuStore'
    }
});