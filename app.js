/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'mobndf',
    ndfId : 'foo',
    ndfMode :'foo',
    ndfName : 'foo',
    ndfType : 'foo',
    ndfDelete : false,
    ndfConnected : false,
    showFormBtnPop : false,
    showFormBtnPush : false,
    showListBtnPop : false,
    showListBtnPush : false,
    showSearchFieldPush : false,
    showSearchFieldPop : false,
    showBtnSaveParametersPush : false,
    // themeVariation: 'light',
    requires: [
        'Ext.MessageBox',
        'mobndf.util.Util',
        'mobndf.view.CapturePicture',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.Number',
        'Ext.form.DatePicker',
        'Ext.form.Select',
        'Ext.data.proxy.LocalStorage',
        'Ext.device.Connection',
        'Ext.util.DelayedTask',
    ],
    views:[ 'Main',
            'Entries2',
            'Ndftypes',
            'CapturePicture',
            // 'Menus',
            'Ndfform',
            'Ndf',
            'Ndfs', 
            'Login',
            'Ndfcharts',
            'Ndfpendings',
            'Ndfpendingbymonths',
            'Ndfcollaborators',
            'Collaborator',
            'Parameters'
    ],
    models : ['Ndftype', 'Ndf', 'Entry', 'Ndfpending', 'Ndfcollaborator', 'Ndfchart', 'Parameters'],
    stores : ['Ndf','Ndftypes', 'NdftypesLocal', 'Ndfsearch', 'NdfsearchLocal','Entries', 'Ndfpendings', 'NdfpendingsLocal', 'Ndfpendingbymonths', 'NdfpendingbymonthsLocal', 'Ndfcollaborators', 'NdfcollaboratorsLocal', 'Ndfchart', 'Ndflocalchart', 'ParametersLocal'],
    controllers :['Cont'],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        // Initialize the main view
        Ext.Viewport.add(Ext.create('mobndf.view.Main'));
        Ext.Ajax.request({
            url : 'sdata/$status',
            disableCaching:false,
            method:'GET',
            headers:{'Accept' : 'application/json'},
            success:function(data) {
                var res = Ext.JSON.decode(data.responseText);
                if (res.result)
                    mobndf.app.ndfConnected = true;
                else
                {
                    mobndf.app.ndfConnected = false;
                    //me.getMain().push({xtype : 'login'});
                }
            },
            failure:function(conn, response) {
                Ext.Msg.alert('Erreur', 'Erreur de connexion', Ext.emptyFn);
            },
        });
    },

    // onUpdated: function() {
    //     Ext.Msg.confirm(
    //         "Application Update",
    //         "This application has just successfully been updated to the latest version. Reload now?",
    //         function(buttonId) {
    //             if (buttonId === 'yes') {
    //                 window.location.reload();
    //             }
    //         }
    //     );
    // }
});
