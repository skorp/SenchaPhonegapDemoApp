Ext.define('SenchaPhonegapDemoApp.controller.CaptureController', {
	extend: 'Ext.app.Controller',
	config: {
		control: {
			"button[action='saveAudio']" : {
				tap: 'tapAudioRecording'
			},
			"button[action='saveCamera']" : {
				tap: 'tapVideoRecording'
			}
		},
		refs: {
			btnAudioRecording : '#btnAudioRecord',
			btnVideoRecording : '#btnVideoRecord',
			spnLimit	: '#spinnerLimit',
			spnDuration: '#spinnerDuration'
		}
	},
	tapAudioRecording : function ()  {
		// var AudioRecording = this.getBtnAudioRecording();
		// console.log('tapaudioRecording');
		//
		// navigator.device.capture.captureVideo(captureSuccess, captureError);
		//
		// function captureSuccess(media) {
		// 	console.log(media);
		// }
		// function captureError(fail) {
		// 	console.log(fail);
		// }
		//
		// AudioRecording.setUi('decline').setText('Stop Recording');
	},
	tapVideoRecording : function () {
		console.log('video recording');

		var VideoRecording = this.getBtnVideoRecording(),
				spnLimit = this.getSpnLimit(),
				spnDuration = this.getSpnDuration();

		var cpVideoConfig = {
			duration: spnDuration.getValue() || 1,
			limit : spnLimit.getValue() || 1
		}

		navigator.device.capture.captureVideo(captureSuccess, captureError,cpVideoConfig);

		function captureSuccess(media) {
			Ext.Msg.alert(media);
			console.log(media);
			VideoRecording.setUi('confirm').setText('Start Recording');
		}
		function captureError(fail) {
			console.log(fail);
			Ext.Msg.alert(fail);
			VideoRecording.setUi('confirm').setText('Start Recording');
		}


		VideoRecording.setUi('decline').setText('Stop Recording');
	}

});
