Ext.define('SenchaPhonegapDemoApp.view.MenuSingleton',  {
    extend: 'Ext.mixin.Observable',
    requires: ['Ext.Menu'],
    singleton: true,
    alias:'widget.menusngl',

    constructor: function(config) {
        this.initConfig(config);
    },
    config: {
        layout:'card'
    },
    setMenu: function() {
		Ext.Viewport.setMenu(this.createMenu('left'), {
			side: 'left',
			reveal: true
		});
    },

    createMenu: function(side) {
        var items = [
            {
                text: 'Camera',
                iconCls: 'camera',
                scope: this,
                handler: function() {
                    
                    this.loadView('camera');
                }
            },
            {
                text: 'Camera',
                iconCls: 'action',
                scope: this,
                handler: function() {
                    
                    this.loadView('camera');
                }
            },
            
        ];

        var className = 'Ext.Menu';

        return Ext.create(className, {
                items: items
        });
    },
    loadView: function(view) {
        Ext.Viewport.hideMenu('left');
    	Ext.Viewport.animateActiveItem({ xtype: view }, this.leftSlide());
    },
    leftSlide : function (){
        console.log('leftslide');
        return {type:'slide',direction:'left'};
    },
    
});