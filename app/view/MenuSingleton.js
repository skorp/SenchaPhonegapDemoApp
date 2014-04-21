Ext.define('SenchaPhonegapDemoApp.view.MenuSingleton',  {
    extend: 'Ext.mixin.Observable',
    requires: ['Ext.Menu','SenchaPhonegapDemoApp.view.MenuList'],
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
            { xclass: 'SenchaPhonegapDemoApp.view.MenuList',store: 'MenuStore'}
        ];
        var className = 'Ext.Menu';
        return Ext.create(className, {
                items: items
        });
    }
});