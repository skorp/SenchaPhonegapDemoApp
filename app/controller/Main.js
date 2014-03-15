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

    stoogleMenu: function(target) {
        //<debug> 
        console.log('on toogle menu gogogo');
        //<debug> 
         Ext.Viewport.toggleMenu('left');
    },

    launch: function() {
        this.callParent(arguments);
        //<debug> 
        console.log('Main controller launch method fired');
        //<debug> 

    },

    init: function(application) {
        this.callParent(arguments);
        //<debug> 
        console.log('Main controller init method fired');
        //<debug> 
    },
    backToHome: function() {
        //<debug> 
            console.log('backToHome function called');
        //<debug> 
        this.gotoMainView()
    },
    gotoMainView: function() {
        Ext.Viewport.animateActiveItem(this.getMainView(),this.getSlideRightTransition());
    },
    getSlideLeftTransition2: function() {
        return {type:'slide',direction:'left'};
    },

    getSlideRightTransition: function() {
        return {type:'slide',direction:'right'};
    },

});