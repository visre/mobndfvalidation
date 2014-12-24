Ext.define('mobndf.view.Ndfform', {
	extend:'Ext.form.Panel',
	xtype:'ndfform',
    requires: [
        'mobndf.view.CapturePicture'
    ],
	config : {
		items: [
			{
				// xtype:'formpanel',
				// id:'newexpform',
				// items : [
				// 	{
						xtype:'fieldset',
						title:'Informations',
						instructions: 'Veuillez renseigner les informations ci-dessus.',
						items : [
							{
								xtype:'textfield',
								id:'fieldRef',
								name:'reference',
								label:'Référence',
								placeHolder:'Saisissez une référence',
								clearIcon:true
							},
							{
								xtype:'datepickerfield',
								id:'fieldDate',
								name:'date',
								value : new Date(),
								label:'Date',
								dateFormat : 'd-m-Y'
								// picker:{
								// 	yearFrom:1990
								// }
							},
							{
								xtype:'numberfield',
								id:'fieldQuantity',
								name:'quantity',
								value : 1,
								label:'Quantité',
								clearIcon:true
							},
							{
								xtype:'numberfield',
								id:'fieldKM',
								value : 0,
								name:'kilometer',
								label:'Kilomètres',
								clearIcon:true
							},
							{
								xtype:'numberfield',
								id:'fieldMontant',
								name:'montant',
								value : 0.00,
								label:'Montant TTC',
								clearIcon:true
							},
							{
								xtype:'selectfield',
								id:'fieldCurrency',
								name:'currency',
								label:'Devise',
								options :[
									{
										text:'EUR',
										value:'EUR'
									},
									{
										text:'USD',
										value:'USD'
									},
									{
										text:'GPB',
										value:'GPB'
									}
								]
							},
							{
								xtype:'textareafield',
								id:'fieldRaison',
								name:'reason',
								label:'Motif'
							},
							{
								xtype:'capturepicture',
								id:'fieldCapture'
							}
					// 	]
					// }
				]
			}
		]
	}
});