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
        styleHtmlContent: true,
        items: [
            {
                xtype : 'toolbar',
                docked:'top',
                title:'Phonegap Sencha Demo ',
                items: [{
                    xtype: 'button',
                    itemId: 'menu',
                    ui: 'action',
                    iconCls: 'settings',
                    
                }]
            },
            {
                xtype: 'image',
                centered: false,
                height: 42,
                margin: '30px auto',
                padding: '',
                width: 150,
                src: 'resources/images/logo.png'

            }
        ],
        html: '<h3>Hello Welcome</h3> <p>It\'s a Demo app to show how to implement ' +
         'phonegap functions like :'+
         '<ul><li>Camera</li>'+
         '<li>Connections</li>'+
         '<li>Accelerometer</li>'+
         '</ul>....'+

         'with Sencha Touch Framework</p>',
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
