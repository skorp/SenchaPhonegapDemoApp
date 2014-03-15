Ext.define('SenchaPhonegapDemoApp.controller.MenuCtrl', {
	extend: 'Ext.app.Controller',
    
    config :{
        refs: {
            mainView : 'mainView'
        },
        control : {
            "button[action=back]" : {
                tap: 'backToHome'
            }
        }
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

})