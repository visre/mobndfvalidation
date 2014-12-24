Ext.define('mobndf.controller.Cont', {
	extend: 'Ext.app.Controller',
	requires: ['Ext.Toast'],
	util: mobndf.util.Util,
	config : {
		currentRecord : null,
		refs : {
			loginBtn : '#logInButton',
			main : 'main',
			entries : 'entries2',
			ndf : 'ndf',
			ndfSearch : 'ndfSearch',
			ndfs : 'ndfs',
			pendingsList : 'ndfpendings',
			collaborator : 'collaborator',
			collaboratorsList : 'ndfcollaborators',
			fieldCapture :'#fieldCapture',
			fieldRaison	:'#fieldRaison',
			fieldCurrency :'#fieldCurrency',
			fieldMontant :'#fieldMontant',
			fieldActive : '#fieldActive',
			fieldKM	:'#fieldKM',
			fieldQuantity :'#fieldQuantity',
			fieldTelephone: '#fieldTelephone',
			fieldMobile: '#fieldMobile',
			fieldEmail: '#fieldEmail',
			fieldRef :'#fieldRef',
			fieldDate :'#fieldDate',
			fieldId :'#fieldId',
			fieldMode :'#fieldMode',
			fieldFirstName : '#fieldFirstName',
			fieldName :'#fieldName',
			fieldType :'#fieldType',
			fieldModeString : '#fieldModeString',
			fieldStatus : '#fieldStatus',
			fieldStep : '#fieldStep',
			fieldDocListCount : '#fieldDocListCount',
			fieldEvidence : '#fieldEvidence',
			fieldServer : '#fieldServer',
			fieldPort : '#fieldPort',
			fieldSecure : '#fieldSecure',
			deleteBtn :'#deleteBtn',
			reinitBtn :'#btnReinit',
			ndfSearchField : '#ndfSearchField',
			login : 'login',
			passwordField : '#passwordTextField',
			labelField : '#signInFailedLabel',
			btnValidate : '#btnValidate',
			btnRefuse : '#btnRefuse',
			btnValidateForm : '#btnValidateForm',
			btnRefuseForm : '#btnRefuseForm',
			btnCallTelForm : '#btnCallTelForm',
			btnCallMobileForm : '#btnCallMobileForm',
			btnSendMailForm : '#btnSendMailForm',
			btnSaveParameters : '#btnSaveParameters',
		},
		control : {
			main : {push : 'onMainPush',pop : 'onMainPop'},
			pendingsList : {itemtaphold: 'onItemPendingsListTapHold', itemdoubletap : 'onItemPendingsListDoubleTap'},
			collaboratorsList : {itemdoubletap : 'onItemCollaboratorsListDoubleTap'},
			entries : {itemtap : 'onEntriesItemTap'},
			ndfs: {itemdoubletap : 'onNdfsItemDoubleTap'},
			login : {signInCommand: 'onSignInCommand'},
			ndf:{validNdfBtnTapCommand : 'onValidNdfBtnTap', refuseNdfBtnTapCommand : 'onRefuseNdfBtnTap'},
			btnCallTelForm: {tap : 'onBtnCallTelFormTap'}, 
			btnCallMobileForm: {tap: 'onBtnCallMobileFormTap'},
			btnSendMailForm: {tap: 'onBtnSendMailFormTap'},
			btnValidate: {tap : 'onBtnValideTap'},
			btnRefuse: {tap : 'onBtnRefuseTap'},
			btnValidateForm: {tap : 'onBtnValidateFormTap'},
			btnRefuseForm: {tap : 'onBtnRefuseFormTap'},
			btnSaveParameters: {tap : 'onBtnSaveParametersTap'}
		}
	},
	onBtnSaveParametersTap : function(button){
		var add = false;
		button.element.removeCls('x-tab-active');
		var me = this;
		var store = Ext.getStore('ParametersLocal');
		var exp = store.getAt(0);
		if (exp == null){
			exp = Ext.create('mobndf.model.Parameters');
			add = true;
		};

		exp.set('name', me.getFieldName().getValue());
		exp.set('server', me.getFieldServer().getValue());
		exp.set('isSecure', me.getFieldSecure().isChecked());
		exp.set('port', me.getFieldPort().getValue());
		if (add) store.add(exp);
		store.sync();
		me.getMain().reset();
	},
	onBtnCallTelFormTap : function(button){
		button.element.removeCls('x-tab-active');
		var store = Ext.getStore('Ndfcollaborators');
		var exp = store.findRecord('id', this.getFieldId().getValue());
		Ext.device.Device.openURL('tel:' + exp.data.telephone);
	},
	onBtnCallMobileFormTap : function(button){
		button.element.removeCls('x-tab-active');
		var store = Ext.getStore('Ndfcollaborators');
		var exp = store.findRecord('id', this.getFieldId().getValue());
		Ext.device.Device.openURL('tel:' + exp.data.mobile);
	},
	onBtnSendMailFormTap : function(button){
		button.element.removeCls('x-tab-active');
		var store = Ext.getStore('Ndfcollaborators');
		var exp = store.findRecord('id', this.getFieldId().getValue());
		Ext.device.Device.openURL('mailto:' + exp.data.email);
	},
	onSignInCommand : function(view, username, password) {
		var me = this;
        login = me.getLogin();
	    if (username.length === 0) {
	        login.showSignInFailedMessage('Veuillez renseigner votre login.');
	        return;
	    }
	    login.setMasked({
	        xtype: 'loadmask',
	        message: 'Connexion...'
	    });

		var param = {id:'Sage1000',authdirectory:'Sage1000',username:username,password:password};

		Ext.Ajax.request({
			url : 'sdata/$connect',
			disableCaching:false,
			method:'POST',
			headers:{'Accept' : 'application/json'},
			params : param,
			success:function(data) {
				mobndf.app.ndfConnected = true;
				login.setMasked(false);
				me.getMain().reset();
			},
			failure:function(conn, response) {
				Ext.Msg.alert('Erreur', 'Erreur de connexion', Ext.emptyFn);
			},
		});
	},
	onInitMain : function() {
		var me = this;
	},
	onNdfsItemDoubleTap : function(list, index, target, record) {
		if (record)
		{
			var me = this;
			me.currentRecord = record;
			mobndf.app.ndfDelete = true;
			mobndf.app.showSearchFieldPop = true;
			me.getMain().push({xtype : 'ndf'});

			if(record.data.status == 1){
				this.getBtnValidateForm().show();
				this.getBtnRefuseForm().show();
			}

			this.manageNdfFields(record);
			this.affectValuesNdf(record);
		}
	},
	onEntriesItemTap : function(list, index, target, record) {
		var me = this;
		if (!mobndf.app.ndfConnected) 
			me.getMain().push({xtype : 'login'})
		else if (record.get('id') == 'btnShowExp')
		{
			var store = Ext.getStore('Ndfpendings');
			this.loadStore(store);
			mobndf.app.showListBtnPush = true;
			me.getMain().push({xtype : 'ndfpendings'});
		}
		else if (record.get('id') == 'btnShowMonth')
		{
			var store = Ext.getStore('Ndfpendingbymonths');
			this.loadStore(store);
			me.getMain().push({xtype : 'ndfpendingbymonths'});
		}
		else if (record.get('id') == 'btnSearchExp')
		{	var store = Ext.getStore('Ndfsearch');
			this.loadStore(store);
			mobndf.app.showSearchFieldPush = true;
			me.getMain().push({xtype : 'ndfs'});
		}
		else if (record.get('id') == 'btnShowCollaborators')
		{
			var store = Ext.getStore('Ndfcollaborators');
			this.loadStore(store);
			me.getMain().push({xtype : 'ndfcollaborators'});
		}
		else if (record.get('id') == 'btnDashboard')
		{
			var data1 = [];
			var data2 = [];
			var data3 = [];
			var data4 = [];
			var title1  = '';
			var title2  = '';
		    var title3  = '';
		    var title4  = '';
			me.getMain().push({xtype : 'ndfcharts'});
	  		var online = Ext.device.Connection.isOnline();
			var store = Ext.getStore('Ndfchart')
			if (online)
				store.setProxy(store.getOnlineProxy());
			else
				store.setProxy(store.getOfflineProxy());
			store.load( { callback : function(records, operation, success) {
					if (online)
					{
						var localStore = Ext.getStore(store.getLocalStorageProxy());
						localStore.removeAll();
						localStore.sync();
					}
					Ext.Array.each(records, function(record) {
						if (online)
							localStore.add(record);
						if (record.data.title0)
						{
							title1 = record.data.title0;
							title2 = record.data.title1;
							title3 = record.data.title2;
							title4 = record.data.title3;
						}	
						if (record.data.statut0)
							data1.push({"statut" : "" + record.data.statut0, "montant" : record.data.montant0, "color" : record.data.color0});
						if (record.data.statut1)
							data2.push({"statut" : "" + record.data.statut1, "montant" : record.data.montant1, "color" : record.data.color1});
						if (record.data.statut2)
							data3.push({"statut" : "" + record.data.statut2, "montant" : record.data.montant2, "color" : record.data.color2});
						if (record.data.statut3)
							data4.push({"statut" : "" + record.data.statut3, "montant" : record.data.montant3, "color" : record.data.color3});
					});
					if (online)
						localStore.sync();	
					AmCharts.makeChart("chartdiv1", {
					    "type": "pie",
						"theme": "none",
					    "titles": [{
					        "text": title1,
					        "size": 16
					    }],
					    "dataProvider": data1 
					    ,
					    "valueField": "montant",
					    "titleField": "statut",
					    "startEffect": "elastic",
					    "startDuration": 2,
					    "labelRadius": 15,
					    "innerRadius": "50%",
					    "depth3D": 10,
					    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					    "angle": 15,
					    "exportConfig":{	
					      menuItems: [{
					      icon: '/lib/3/images/export.png',
					      format: 'png'	  
					      }]  
						}
					});
					AmCharts.makeChart("chartdiv2", {
					    "type": "pie",
						"theme": "none",
					    "titles": [{
					        "text": title2,
					        "size": 16
					    }],
					    "dataProvider": data2,
					    "valueField": "montant",
					    "titleField": "statut",
					    "startEffect": "elastic",
					    "startDuration": 2,
					    "labelRadius": 15,
					    "innerRadius": "50%",
					    "depth3D": 10,
					    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					    "angle": 15,
					    "exportConfig":{	
					      menuItems: [{
					      icon: '/lib/3/images/export.png',
					      format: 'png'	  
					      }]  
						}
					});
					AmCharts.makeChart("chartdiv3", {
					    "type": "pie",
						"theme": "none",
					    "titles": [{
					        "text": title3,
					        "size": 16
					    }],
					    "dataProvider": data3,
					    "valueField": "montant",
					    "titleField": "statut",
					    "startEffect": "elastic",
					    "startDuration": 2,
					    "labelRadius": 15,
					    "innerRadius": "50%",
					    "depth3D": 10,
					    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					    "angle": 15,
					    "exportConfig":{	
					      menuItems: [{
					      icon: '/lib/3/images/export.png',
					      format: 'png'	  
					      }]  
						}
					});
					AmCharts.makeChart("chartdiv4", {
					    "type": "pie",
						"theme": "none",
					    "titles": [{
					        "text": title4,
					        "size": 16
					    }],
					    "dataProvider": data4,
					    "valueField": "montant",
					    "titleField": "statut",
					    "startEffect": "elastic",
					    "startDuration": 2,
					    "labelRadius": 15,
					    "innerRadius": "50%",
					    "depth3D": 10,
					    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					    "angle": 15,
					    "exportConfig":{	
					      menuItems: [{
					      icon: '/lib/3/images/export.png',
					      format: 'png'	  
					      }]  
						}
					});
				}
			});
		}
		else if (record.get('id') == 'btnParameter')
		{
			var me = this;
			var store = Ext.getStore('ParametersLocal');
			var exp = store.getAt(0);
			mobndf.app.showBtnSaveParametersPush = true;
			me.getMain().push({xtype : 'parameters'});
			if (exp != null){
				this.getFieldName().setValue(exp.data.name);
				this.getFieldServer().setValue(exp.data.server);
				this.getFieldSecure().set('checked',exp.data.isSecure);
				this.getFieldPort().setValue(exp.data.port);
			};
		}
	},
	affectValuesNdf : function(record) {
		var me = this;
		var fieldName = me.getFieldName();
		var fieldCapture = me.getFieldCapture();
		var fieldRaison = me.getFieldRaison();
		var fieldCurrency = me.getFieldCurrency();
		var fieldMontant = me.getFieldMontant();
		var fieldKM = me.getFieldKM();
		var fieldQuantity = me.getFieldQuantity();
		var fieldRef = me.getFieldRef();
		var fieldDate = me.getFieldDate();
		var fieldType = me.getFieldType();
		var fieldStep = me.getFieldStep();
		var fieldStatus = me.getFieldStatus();
		var fieldModeString = me.getFieldModeString();
		var fieldDocListCount = me.getFieldDocListCount();
		var fieldEvidence = me.getFieldEvidence();
		var fieldId = me.getFieldId();

		fieldName.setValue(record.data.name);
		fieldRaison.setValue(record.data.reason);
		fieldMontant.setValue(record.data.amount);
		fieldKM.setValue(record.data.km);
		fieldQuantity.setValue(record.data.quantity);
		fieldRef.setValue(record.data.ref);
		fieldDate.setValue(record.data.date);
		fieldCurrency.setValue(record.data.currency);
		fieldType.setValue(record.data.type);
		fieldStep.setValue(record.data.etape); 
		fieldStatus.setValue(record.data.statusString);
		fieldModeString.setValue(record.data.modeString);
		fieldDocListCount.setValue(record.data.docListCount);
		fieldEvidence.setValue(record.data.evidence);
		fieldId.setValue(record.data.id);
	},
	guid : function() {
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random()*16)%16 | 0;
			d = Math.floor(d/16);
			return (c=='x' ? r : (r&0x7|0x8)).toString(16);
		});
		return uuid;
	},
	onMainPush : function(view, item) {
		var btnValidate = this.getBtnValidate();
		var btnRefuse = this.getBtnRefuse();
		var ndfSearchField = this.getNdfSearchField();
		var btnValidateForm = this.getBtnValidateForm();
		var btnRefuseForm = this.getBtnRefuseForm();
		var btnSendMailForm = this.getBtnSendMailForm();
		var btnCallTelForm = this.getBtnCallTelForm();
		var btnCallMobileForm = this.getBtnCallMobileForm();
		var btnSaveParameters = this.getBtnSaveParameters();
		btnValidate.hide();
		btnRefuse.hide();
		btnRefuseForm.hide();
		btnValidateForm.hide();
		ndfSearchField.hide();
		btnSendMailForm.hide();
		btnCallTelForm.hide();
		btnCallMobileForm.hide();
		btnSaveParameters.hide();

		mobndf.app.ndfDelete = false;

		if (mobndf.app.showFormBtnPush)
		{
			btnRefuseForm.show();
			btnValidateForm.show();
		}

		if (mobndf.app.showListBtnPush)
		{
			btnValidate.show();
			btnRefuse.show();
		}

		if (mobndf.app.showSearchFieldPush)
           	ndfSearchField.show();

        if (mobndf.app.showBtnSaveParametersPush)
        	btnSaveParameters.show();

		mobndf.app.showFormBtnPush = false;
        mobndf.app.showListBtnPush = false;
        mobndf.app.showSearchFieldPush = false;
		mobndf.app.showBtnSaveParametersPush = false;
	},
	onMainPop : function(view, item) {
		var btnValidate = this.getBtnValidate();
		var btnRefuse = this.getBtnRefuse();
		var ndfSearchField = this.getNdfSearchField();
		var btnValidateForm = this.getBtnValidateForm();
		var btnRefuseForm = this.getBtnRefuseForm();
		var btnCallTelForm = this.getBtnCallTelForm();
		var btnCallMobileForm = this.getBtnCallMobileForm();
		var btnSendMailForm = this.getBtnSendMailForm();
		var btnSaveParameters = this.getBtnSaveParameters();
		btnValidate.hide();
		btnRefuse.hide();
		btnValidateForm.hide();
		btnRefuseForm.hide();
		ndfSearchField.hide();
		btnCallTelForm.hide();
		btnCallMobileForm.hide();
		btnSendMailForm.hide();
		btnSaveParameters.hide();

		if (mobndf.app.showListBtnPop)
		{
			btnValidate.show();
			btnRefuse.show();
		};

		if (mobndf.app.showSearchFieldPop)
			ndfSearchField.show();

		mobndf.app.showFormBtnPop = false;
        mobndf.app.showListBtnPop = false;
        mobndf.app.showSearchFieldPop = false;
	},
	manageNdfFields : function(record) {
		var me = this;
		var fieldCapture = me.getFieldCapture();
		var fieldRaison = me.getFieldRaison();
		var fieldCurrency = me.getFieldCurrency();
		var fieldMontant = me.getFieldMontant();
		var fieldKM = me.getFieldKM();
		var fieldQuantity = me.getFieldQuantity();
		var fieldRef = me.getFieldRef();
		var fieldDate = me.getFieldDate();
		var fieldId = me.getFieldId();
		var mode = record.get('mode');
		if (record.data.guid)
		  mobndf.app.ndfId = record.data.guid;
		else
		  mobndf.app.ndfId = this.guid();
		mobndf.app.ndfMode = record.get('mode');
		mobndf.app.ndfName = record.get('name');
		mobndf.app.ndfType = record.get('id');

		fieldId.hide();
		fieldCapture.hide();
		fieldRaison.hide();
		fieldCurrency.hide();
		fieldMontant.hide();
		fieldKM.hide();
		fieldQuantity.hide();
		fieldRef.hide();
		fieldDate.hide();
		if (mode==99)
		{
			fieldDate.show();
			fieldRaison.show();
			fieldMontant.show();
			fieldCurrency.show();
		}
		else if (mode==0)
		{
			fieldDate.show();
			fieldRef.show();
			fieldRaison.show();
			fieldQuantity.show();
			fieldMontant.show();
			fieldCurrency.show();
			// fieldCapture.show();
		}
		else if (mode==1)
		{

			fieldDate.show();
			fieldRef.show();
			fieldRaison.show();
			fieldQuantity.show();
			fieldMontant.show();
			fieldCurrency.show();
			// fieldCapture.show();
		}
		else if (mode==2)
		{
			fieldDate.show();
			fieldRef.show();
			fieldRaison.show();
			fieldQuantity.show();
			// fieldCapture.show();

		}
		else if (mode==3)
		{
			fieldDate.show();
			fieldRef.show();
			fieldRaison.show();
			fieldKM.show();
			// fieldCapture.show();
		}
	},
	onItemCollaboratorsListDoubleTap : function (list, index, target, record){
		if (record)
		{
			var me = this;
			me.currentRecord = record;
			me.getMain().push({xtype: 'collaborator'});	

			var fieldId = this.getFieldId();
			var fieldActive = this.getFieldActive();
			var fieldName = this.getFieldName();
			var fieldFirstName = this.getFieldFirstName();
			var fieldTelephone = this.getFieldTelephone();
			var fieldMobile = this.getFieldMobile();
			var fieldEmail = this.getFieldEmail();
			if (record.data.active == true)
				fieldActive.setValue('Oui')
			else
				fieldActive.setValue('Non');
			fieldId.setValue(record.data.id);
			fieldName.setValue(record.data.name);
			fieldFirstName.setValue(record.data.firstname);
			fieldTelephone.setValue(record.data.telephone);
			fieldMobile.setValue(record.data.mobile);
			fieldEmail.setValue(record.data.email);

			if (record.data.telephone != '')
				this.getBtnCallTelForm().show();

			if (record.data.mobile != '')
				this.getBtnCallMobileForm().show();

			if (record.data.email != '')
				this.getBtnSendMailForm().show();
		}
	},
	onItemPendingsListTapHold : function(){
		var currentView = this.getPendingsList();
		currentView.setMode('MULTI');
		Ext.toast('Multi-sélection activée');
	},
	onItemPendingsListDoubleTap : function(list, index, target, record) {
		if (record)
		{
			var me = this;
			me.currentRecord = record;
			mobndf.app.ndfDelete = true;
			mobndf.app.showListBtnPop = true;
			mobndf.app.showFormBtnPush = true;
			me.getMain().push({xtype : 'ndf'});

			this.manageNdfFields(record);
			this.affectValuesNdf(record);
		}
	},
	onBtnValideTap: function(button){
		button.element.removeCls('x-tab-active');
		var me = this;
		var param;
		var store = Ext.getStore('Ndfpendings');
		var list = me.getPendingsList();
		var total = 0;
		var nbNdf = 0;
		var nbNdfTraite = 0;

		Ext.each(list.getSelection(), function(record, index) {
				total += record.data.amount;
				nbNdf += 1;
		});

		Ext.Msg.confirm('Validation', 'Confirmez-vous la validation de ' + nbNdf + ' note(s) de frais pour un total de ' + total + '?', function(btn) {
	        if (btn === 'yes') {
	        	var me = this;
	            Ext.each(list.getSelection(), function(record, index){	
	            	param = {id:record.data.id};
					var exp = store.findRecord('guid', record.guid);
					Ext.Ajax.request({
						url : 'sdata/mobndfmanagersPackage/accept',
						disableCaching:false,
						method:'POST',
						headers:{'Accept' : 'application/json'},
						params : param,
						success:function(data) {		
							var res = Ext.decode(data.responseText);
							if (res.result.error == 0){
								store.remove(exp);
								store.sync();
								nbNdfTraite = nbNdfTraite + 1;
							}
						},
						failure:function(conn, response) {
							Ext.Msg.alert('Erreur', 'Erreur de connexion', Ext.emptyFn);
						},
					});
	            });
	            me.getMain().reset();
	            Ext.toast('Les notes de frais ont été traitées');
	            // Ext.Msg.alert('Traitement effectué', 'Les notes de frais ont été traitées');
	        }
		});
	},
	onBtnRefuseTap: function(button){
		button.element.removeCls('x-tab-active');
		var me = this;
		var param;
		var store = Ext.getStore('Ndfpendings');
		var list = me.getPendingsList();
		var total = 0;
		var nbNdf = 0;
		var nbNdfTraite = 0;

		Ext.each(list.getSelection(), function(record, index) {
			total += record.data.amount;
			nbNdf += 1;
		});
		Ext.Msg.confirm('Refus', 'Confirmez-vous le refus de ' + nbNdf + ' note(s) de frais pour un total de ' + total + ' ?', function(btn) {
	        if (btn === 'yes') {
	        	var me = this;
	            Ext.each(list.getSelection(), function(record, index){	
	            	param = {id:record.data.id};
					var exp = store.findRecord('guid', record.guid);
					Ext.Ajax.request({
						url : 'sdata/mobndfmanagersPackage/refuse',
						disableCaching:false,
						method:'POST',
						headers:{'Accept' : 'application/json'},
						params : param,
						success:function(data) {		
							var res = Ext.decode(data.responseText);
							if (res.result.error == 0){
								store.remove(exp);
								store.sync();
								nbNdfTraite = nbNdfTraite + 1;
							}
						},
						failure:function(conn, response) {
							Ext.Msg.alert('Erreur', 'Erreur de connexion', Ext.emptyFn);
						},
					});
	            });
	            me.getMain().reset();
	            Ext.toast('Les notes de frais ont été traitées');
	        }
		});
	},
	onBtnValidateFormTap: function(list, index, target, record){
		Ext.Msg.confirm('Validation', 'Confirmez-vous la validation de cette note de frais?', function(btn) {
	        if (btn === 'yes') {
				var me = this;
				var param = {id:this.getFieldId().getValue()};
				var store = Ext.getStore('Ndfpendings');
				var exp = store.findRecord('guid', mobndf.app.ndfId);
								
				Ext.Ajax.request({
					url : 'sdata/mobndfmanagersPackage/accept',
					disableCaching:false,
					method:'POST',
					headers:{'Accept' : 'application/json'},
					params : param,
					success:function(data) {		
						var res = Ext.decode(data.responseText);
						if (res.result.error == 0){
							store.remove(exp);
							store.sync();
						}
						Ext.Msg.alert('Confirmation', res.result.message);
					},
					failure:function(conn, response) {
						Ext.Msg.alert('Erreur', 'Erreur de connexion', Ext.emptyFn);
					},
				});
				me.getMain().reset();
			}
		});
	},
	onBtnRefuseFormTap: function(){
		Ext.Msg.confirm('Validation', 'Confirmez-vous le refus de cette note de frais?', function(btn) {
	        if (btn === 'yes') {
				var me = this;
				var param = {id:this.getFieldId().getValue(), motif: this.getFieldRaison().getValue()};
				var store = Ext.getStore('Ndfpendings');
				var exp = store.findRecord('guid', mobndf.app.ndfId);
								
				Ext.Ajax.request({
					url : 'sdata/mobndfmanagersPackage/refuse',
					disableCaching:false,
					method:'POST',
					headers:{'Accept' : 'application/json'},
					params : param,
					success:function(data) {		
						var res = Ext.decode(data.responseText);
						if (res.result.error == 0){
							store.remove(exp);
							store.sync();
						}
						Ext.Msg.alert('Confirmation', res.result.message);
					},
					failure:function(conn, response) {
						Ext.toast('Erreur de connexion');
					},
				});
				me.getMain().reset();
			}
		});
	},
	loadStore : function (store) {
  		var online = Ext.device.Connection.isOnline();
		if (online)
		{
			store.setProxy(store.getOnlineProxy());
			store.load( { callback : function(records, operation, success) {
					var localStore = Ext.getStore(store.getLocalStorageProxy());
					localStore.removeAll();
					localStore.sync();
					Ext.Array.each(records, function(record) {
						localStore.add(record);
					});
					localStore.sync();	
				}
			});
		}
		else
		{
			store.setProxy(store.getOfflineProxy());
			store.load();
		}
	}
});
