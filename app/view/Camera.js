Ext.define('SenchaPhonegapDemoApp.view.Camera', {
    extend: 'Ext.Panel',
	alias: 'widget.cameraView',
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
                	},
                    {
                        xtype:'spacer'
                    },
                    {
                        xtype    : 'button',
                        itemId   : 'deleteBtn',
                        iconCls  : 'delete',
                        align    : 'right',
                        //iconMask : true,
                        ui       : 'decline',
                        action   : 'delete',
                        hidden   : true
                    }
                ]
            },
            {
                xtype    : 'button',
                text     : 'Take photo',
                itemId   : 'photoBtn',
                margin   : '5 10 0 10',
                iconMask : true,
                ui       : 'confirm',
                action   : 'capture'
            },
            {
                xtype   : 'button',
                text    : 'Open Photo',
                itemId  : 'opPhoto',
                margin   : '5 10 0 10',
                iconMask: true,
                action  : 'open'
            },
            {
                xtype  : 'container',
                layout : 'fit',
                margin : '10 0 0 0',
                itemId : 'imgContainer',
                items  : [
                    {
                        xtype  : 'image',
                        itemId : 'img',
                        height : 300,
                        src: "http://placehold.it/300x300",
                    }
                ]
            }
        ],  
        
    }
});