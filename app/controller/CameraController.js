Ext.define('SenchaPhonegapDemoApp.controller.CameraController', {
	extend: 'Ext.app.Controller',
	config : {
        control : {
            "button[action=capture]" : {
                tap : 'capturePhoto'
            },
            "button[action=delete]"  : {
                tap : 'deletePhoto'
            },
            "button[action=open]"    : {
                tap : 'openPhoto'
            }
        },

        refs : {
            photoBtn     : '#photoBtn',
            Img          : '#img',
            deleteBtn    : 'titlebar #deleteBtn',
            imgContainer : '#imgContainer',
            opPhoto      : '#opPhoto'
        }
    },
    deletePhoto : function () {

        console.log('delete photo');
        var me = this,
            img = me.getImg(),
            deleteBtn = this.getDeleteBtn();

        img.setSrc("http://placehold.it/300x300");
        deleteBtn.hide(true);
    },

    createImg   : function () {
        var me = this,
            imgContainer = me.getImgContainer(),
            img;

        img = {
            xtype  : 'image',
            itemId : 'img',
            height : 400
        };

        imgContainer.add(img);
    },

    openPhoto   : function () {
        console.log('openPhoto');
        var me = this,
            pictureSource ,
            destinationType , 
            deleteBtn = me.getDeleteBtn(),
            photoComponent = me.getImg();


        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
        
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { 
            quality: 50,
            destinationType: destinationType.DATA_URL,
            sourceType: pictureSource.SAVEDPHOTOALBUM 
        });

        function onPhotoDataSuccess (imageData) {

            photoComponent.setSrc("data:image/jpeg;base64,"+imageData);
            deleteBtn.setHidden(false);
        }
        function onFail (message) {
            alert('Failed because: ' + message);
        }
    },

    capturePhoto : function () {
        console.log('capture phtoto')
        var me = this,
            pictureSource, 
            destinationType, 
            deleteBtn = me.getDeleteBtn(),
            photoComponent = me.getImg();

        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
        
        navigator.camera.getPicture(
                    onPhotoDataSuccess,
                    onFail, 
                    {
                        quality : 50, 
                        destinationType: destinationType.FILE_URL,
                        saveToPhotoAlbum:true,
                        allowEdit:true,
                        sourceType: pictureSource.CAMERA
                    });

        function onPhotoDataSuccess (imageData) {
            photoComponent.setSrc(imageData);
            deleteBtn.setHidden(false);
        }

        function onFail (message) {
            alert('Failed because: ' + message);
        }
    }
});