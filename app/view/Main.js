Ext.define('SenchaPhonegapDemoApp.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.mainView',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Img',
        'Ext.Menu'
    ],

    config: {
        itemId: 'mainView',
        styleHtmlContent: true,
        layout:'card',
        items: [
        {
            xtype : 'toolbar',
            docked:'top',
            title:'Phonegap Demo ',
            items: [{
            
                
                        xtype: 'button',
                        itemId: 'menu',
                        ui: 'action',
                        iconCls: 'settings',
                        text: ''
            }]
        },
            
             
            {
                xtype: 'image',
                centered: false,
                height: 137,
                margin: '0 auto',
                padding: '',
                width: 150,
                src: 'resources/images/logo.png'
            }
        ],
        html: '<h3>Hello Welcome</h3> <p>It\'s a Demo app to show how to implement' +
         'phonegap functions like Camera, Connections, Accelerometer....</p>',
        listeners: [
            {
                fn: 'onLeftMenuTap',
                event: 'tap',
                delegate: '#menu'
            }
        ]
    },

    onLeftMenuTap: function(target) {
        console.log('on left menu tap');
        this.fireEvent('stoogleMenu',this);
    }

});
