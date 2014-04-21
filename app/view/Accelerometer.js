Ext.define('SenchaPhonegapDemoApp.view.Accelerometer',{
	extend: 'Ext.form.Panel',
	alias: 'widget.accelerometerView',

    requires: [
        'Ext.TitleBar',
        'Ext.field.Text',
        'Ext.Button',
        'Ext.MessageBox'
    ],

    config: {
            items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Accelerometer',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'backButton',
                        ui: 'back',
                        text: 'Home',
                        action: 'back'
                    },
                ]
            },
            {
                xtype: 'textfield',
                label: 'acc.X',
                name: 'acceleration-x',
                itemId :'accelerationx',
                readOnly : true,
                margin:'20px 5px'
            },
            {
                xtype: 'textfield',
                label: 'acc.Y',
                name: 'acceleration-y',
                itemId :'accelerationy',
                readOnly : true,
                margin:'20px 5px'
            },
            {
                xtype: 'textfield',
                label: 'acc.Z',
                name: 'acceleration-z',
                itemId :'accelerationz',
                readOnly : true,
                margin:'20px 5px'
            },
            {
                xtype: 'textfield',
                label: 'timestamp',
                name: 'timestamp',
                itemId :'timestamp',
                readOnly : true,
                margin:'20px 5px'
            },
            {
                xtype: 'button',
                action: 'accelerometer',
                docked: 'bottom',
                margin: '20px 0',
                ui: 'confirm',
                text: 'Start Accelerometer',
                itemId : 'btnAcc'
            }
        ]
    }
})