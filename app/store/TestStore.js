Ext.define('SenchaPhonegapDemoApp.store.TestStore', {
    extend: 'Ext.data.Store',
    config: {
        data: [
        {
            icon: 'camera',
            view: 'camera',
            text: 'Camera'
        },
        {
            icon: 'camera',
            view: 'camera',
            text: 'Camera'
        },
        {
            icon: 'camera',
            view: 'camera',
            text: 'Camera'
        },
        {
            icon: 'camera',
            view: 'camera',
            text: 'Camera'
        }
        ],
        model: 'SenchaPhonegapDemoApp.model.TestModel',
        storeId: 'TestStore'
    }
});