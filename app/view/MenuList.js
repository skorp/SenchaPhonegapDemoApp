Ext.define('SenchaPhonegapDemoApp.view.MyDataItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: ['Ext.Button'],
    alias:'widget.mymenudataitem',
    config: {
        nameButton: true,
        defaults: {
            margin: '5px 0'
        },
        dataMap: {
            getNameButton: {
                setText: 'text',
                setIconCls:'icon',
                
            }
        }
    },
    applyNameButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getNameButton());
    },
    updateNameButton: function(newNameButton, oldNameButton) {
        if (oldNameButton) {
            this.remove(oldNameButton);
        }
        if (newNameButton) {
            newNameButton.on('tap', this.onNameButtonTap, this);
            this.add(newNameButton);
        }
    },
    onNameButtonTap: function(button, e) {
        var record = this.getRecord();
        this.loadView(record.data.view);
    },
    loadView: function(view) {
        Ext.Viewport.hideMenu('left');
        Ext.Viewport.animateActiveItem({ xtype: view }, this.leftSlide());
    },
    leftSlide : function (){
        console.log('leftslide');
        return {type:'slide',direction:'left'};
    }

    
});

Ext.define('SenchaPhonegapDemoApp.view.MenuList', {
    extend: 'Ext.dataview.DataView',
    fullscreen: true,
    config: {
        defaultType: 'mymenudataitem',
        useComponents: true,
        height: '100%',
        width: '190px'
    }
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! RUN