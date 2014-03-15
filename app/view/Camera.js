Ext.define('SenchaPhonegapDemoApp.view.Camera', {
    extend: 'Ext.Panel',
	alias: 'widget.camera',
    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.Img'
    ],

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'PhoneGap Camera',
                items: [
                	{
                		xtype: 'button',
                		itemId: 'backButton',
                		ui: 'back',
                		text: 'Home',
                		action: 'back'
                	}
                ]
            },
            {
                xtype: 'button',
                margin: '10px 0',
                text: 'MyButton'
            },
            {
                xtype: 'button',
                margin: '10px 0',
                text: 'MyButton1'
            },
            {
                xtype: 'image',
                docked: 'bottom',
                height: '',
                minHeight: '80%',
                width: '100%',
                src: 'http://placehold.it/300x300'
            }
        ],
        listeners: [
        	{
        		fn: 		'onBackButtonFn',
        		event: 		'tap',
        		delegate: 	'#backButton'
        	}
        ]
    },

    onBackButtonFn: function () {
    	//<debug> 
    		console.log('Back Button ');
    	//<debug> 

    	this.fireEvent('backToHome');
    }

});