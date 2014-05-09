Ext.define('SenchaPhonegapDemoApp.view.Capture', {
	extend: 'Ext.TabPanel',
	alias: 'widget.captureView',
	requires: [
        'Ext.TitleBar',
        'Ext.Video',
				'Ext.MessageBox'
    ],
    config: {

        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Camera',
                iconCls: 'camera',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Camera',
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
                        action: 'saveCamera',
                        ui: 'confirm',
                        text: 'Start recording Video',
                        itemId: 'btnVideoRecord',
                        centered:true,

                }
                ]
            },
            {
                title: 'Audio',
                iconCls: 'action',
                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Audio',
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'backButton',
                                ui: 'back',
                                text: 'Home',
                                action: 'back'
                            },
                        ],
                        flex:1
                    },
                    {
                        xtype: 'label',
                        itemId: 'lblDuration',
                        html:'00:00',
                        margin:'30px auto',
                        flex:2

                    },
                    {
                        xtype: 'button',
                        action: 'saveAudio',
                        ui: 'confirm',
                        text: 'Start recordingss',
                        itemId: 'btnAudioRecord',
                        centered:true,
                        flex:3

                    }





                ]
            }
        ]
    }
});
