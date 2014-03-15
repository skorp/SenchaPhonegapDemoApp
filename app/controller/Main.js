Ext.define('SenchaPhonegapDemoApp.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView: 'mainView'
        },
        control: {
            "mainView": {
                stoogleMenu: 'stoogleMenu'
            },
             "button[action=back]" : {
                tap: 'backToHome'
            }
        }
    },
    stoogleMenu: function() 
    {
        
        console.log('on toogle menu gogogo');

         Ext.Viewport.toggleMenu('left');
    },
    launch: function() {
        this.callParent(arguments);
        console.log('Main controller launch method fired');
    },

    init: function(application) {
        this.callParent(arguments);
        console.log('Main controller init method fired');
    },
    backToHome: function() {
        console.log('backToHome function called');
        this.gotoMainView();
    },
    gotoMainView: function() {
        Ext.Viewport.animateActiveItem(this.getMainView(),this.getSlideRightTransition());
    },
    getSlideLeftTransition2: function() {
        return {type:'slide',direction:'left'};
    },

    getSlideRightTransition: function() {
        return {type:'slide',direction:'right'};
    }

});