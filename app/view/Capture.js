Ext.define('SenchaPhonegapDemoApp.view.Capture', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.captureView',
	requires: [
        'Ext.TitleBar',
        'Ext.Video',
				'Ext.MessageBox'
    ],
		config: {
        items: [
            {
                xtype: 'container',
                title: 'Camera',
                iconCls: 'camera',
								items: [
					      {
					          docked: 'top',
					          xtype: 'titlebar',
					          title: 'Camera',
					          items: [
					                  {
					                      xtype: 'button',
					                      itemId: 'backButton',
					                      ui: 'back',
					                      text: 'Home',
					                      action: 'back'
					                  }
					              ]
					      },
								{
									xtype: 'panel',
									items : [
										{
											xtype: 'container',
											height: 50,
											layout: 'vbox',
											items : [
												{
												xtype: 'label',
												flex:1,
												centered:true,
												html:'set capturing options'
												}
											]
										},
										{
											xtype: 'spinnerfield',
											centered: false,
											label: 'Limit',
											minValue: 1,
											stepValue: 1,
											itemId:'spinnerLimit'
										},
										{
											xtype: 'spinnerfield',
											centered: false,
											margin: '10px 0',
											label: 'Duration',
											minValue: 5,
											stepValue: 5,
											itemId:'spinnerDuration'
										},
										{
											xtype: 'button',
											action: 'saveCamera',
											ui: 'confirm',
											text: 'Start recording Video',
											itemId: 'btnVideoRecord',

										}

									]
								}
								]

            },
						{
							xtype:'container',
								title: 'Audio',
								iconCls: 'action',
								layout: {
										type: 'vbox',
										align: 'center',
										pack: 'center'
								},

								items: [
										{
												docked: 'top',
												xtype: 'titlebar',
												title: 'Audio',
												items: [
														{
																xtype: 'button',
																itemId: 'backButton',
																ui: 'back',
																text: 'Home',
																action: 'back'
														},
												],
												flex:1
										},
										{
												xtype: 'label',
												itemId: 'lblDuration',
												html:'00:00',
												margin:'30px auto',
												flex:2

										},
										{
												xtype: 'button',
												action: 'saveAudio',
												ui: 'confirm',
												text: 'Start recordingss',
												itemId: 'btnAudioRecord',
												centered:true,
												flex:3

										}
										]
						}
        ],
        tabBar: {
            docked: 'bottom'
        }
    }

});
//     config: {
//         tabBar: {
//             docked: 'bottom',
//             scrollable: false,
//             layout: {
//                 type: 'hbox',
//                 align: 'center',
//                 pack: 'center'
//             }
//         },
//         items: [
// 				{
// 		      docked: 'top',
// 	      	xtype: 'titlebar',
// 	        title: 'Camera',
// 	        items: [
// 	        {
// 	        	xtype: 'button',
// 	          itemId: 'backButton',
// 	          ui: 'back',
// 	                      text: 'Home',
// 	                      action: 'back'
// 	                  }
// 	              ]
// 	      },
// 					{
// 					xtype: 'tabpanel',
//           docked: 'bottom',
// 					items: [
// 							{
// 									xtype: 'container',
// 									title: 'Tab 1',
// 									iconCls: 'info',
// 									items: [
// 											{
// 													xtype: 'formpanel'
// 											},
// 											{
// 													xtype: 'spinnerfield',
// 													label: 'Field'
// 											},
// 											{
// 													xtype: 'spinnerfield',
// 													label: 'Field'
// 											},
// 											{
// 													xtype: 'button',
// 													text: 'MyButton'
// 											}
// 									]
// 								},
//
// 									{
// 										xtype:'container',
// 									    title: 'Camera',
// 									    iconCls: 'camera',
//
//
// 									    styleHtmlContent: true,
//
// 									    items: [
// 									      {
// 									          docked: 'top',
// 									          xtype: 'titlebar',
// 									          title: 'Camera',
// 									          items: [
// 									                  {
// 									                      xtype: 'button',
// 									                      itemId: 'backButton',
// 									                      ui: 'back',
// 									                      text: 'Home',
// 									                      action: 'back'
// 									                  }
// 									              ]
// 									      },
//
// 									                  	{
// 																				xtype: 'label',
// 																				html: '<div><h3>set Capture options</h3></div>',
//
// 																			},
//
// 																			{
// 																				xtype: 'spinnerfield',
// 																				centered: false,
// 																				label: 'Limit',
// 																				minValue: 1,
// 																				stepValue: 1,
// 																			},
// 																			{
// 																				xtype: 'spinnerfield',
// 																				centered: false,
// 																				margin: '10px 0',
// 																				label: 'Duration',
// 																				minValue: 1,
// 																				stepValue: 1,
// 																			},
// 																			{
// 																				xtype: 'button',
// 																				action: 'saveCamera',
// 																				ui: 'confirm',
// 																				text: 'Start recording Video',
// 																				itemId: 'btnVideoRecord',
//
// 																			}
//
//
//
// 									    ]
// 									},
// 									{
// 										xtype:'container',
// 											title: 'Audio',
// 											iconCls: 'action',
// 											layout: {
// 													type: 'vbox',
// 													align: 'center',
// 													pack: 'center'
// 											},
//
// 											items: [
// 													{
// 															docked: 'top',
// 															xtype: 'titlebar',
// 															title: 'Audio',
// 															items: [
// 																	{
// 																			xtype: 'button',
// 																			itemId: 'backButton',
// 																			ui: 'back',
// 																			text: 'Home',
// 																			action: 'back'
// 																	},
// 															],
// 															flex:1
// 													},
// 													{
// 															xtype: 'label',
// 															itemId: 'lblDuration',
// 															html:'00:00',
// 															margin:'30px auto',
// 															flex:2
//
// 													},
// 													{
// 															xtype: 'button',
// 															action: 'saveAudio',
// 															ui: 'confirm',
// 															text: 'Start recordingss',
// 															itemId: 'btnAudioRecord',
// 															centered:true,
// 															flex:3
//
// 													}
// ]
// 									}
// 					]
// 				}
//
//         ]
//     }
//});
