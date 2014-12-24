Ext.define('mobndf.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    title: 'Mes notes de frais',
    autoDestroy : false,
    requires: [
        'Ext.TitleBar',
        'Ext.field.Search',
        'Ext.tab.Bar'
    ],
    config: {
        useTitleForBackButtonText: true,
        navigationBar : {
        items: [
                {
                    xtype: 'searchfield',
                    id: 'ndfSearchField',
                    hidden: true,
                    align: 'right',
                    listeners: {
                        clearicontap: function() {
                            Ext.getStore('NdfsearchLocal').clearFilter();
                        },
                        keyup: function(field) {
                            queryString = field.getValue();
                            // var store = Ext.getStore('Ndf');
                            var store = Ext.getStore('NdfsearchLocal');
                            store.clearFilter();
                            if (queryString) {
                                var reg = new RegExp(queryString, 'i');
                                store.filterBy(function(record) {
                                    if (reg.test(record.get('name')) || (reg.test(record.get('statusString'))) || (reg.test(record.get('type'))))
                                        return true;
                                    return false;
                                });
                            }
                            store.sync();
                        }
                    }
                }
             ]
        },
        items: [
            {
                xtype : 'entries2'
            },
            {
                xtype: 'tabbar',
                cls: 'ndftab',
                id : 'maintoolbar',
                layout : {pack : 'center', align:'center'},
                docked:'bottom',
                items : [
                    {
                        iconCls:'icon-check2',
                        title:'Valider',
                        ui : 'confirm',
                        id:'btnValidate',
                        hidden : true
                    },
                    {
                        iconCls:'icon-check',
                        title:'Tout valider',
                        id:'btnValidateAll',
                        hidden : true
                    },
                    {
                        iconCls:'icon-delete',
                        title:'Refuser',
                        id:'btnRefuse',
                        hidden : true
                    },
                    {
                        iconCls:'icon-delete_black1',
                        title:'Tout refuser',
                        id:'btnRefuseAll',
                        hidden : true
                    },
                    {
                        iconCls:'icon-check2',
                        title:'Valider',
                        ui:'confirm',
                        id:'btnValidateForm',
                        hidden: true
                    },
                    {
                        iconCls:'icon-delete',
                        title:'Refuser',
                        ui:'confirm',
                        id:'btnRefuseForm',
                        hidden: true
                    },
                    {
                        iconCls:'',
                        title: 'Fixe',
                        id:'btnCallTelForm',
                        hidden: true
                    },
                    {
                        iconCls:'',
                        title: 'Mobile',
                        id:'btnCallMobileForm',
                        hidden: true
                    },
                    {
                        iconCls:'icon-mail',
                        title: 'Mail',
                        id:'btnSendMailForm',
                        hidden: true
                    },
                    {
                        iconCls:'icon-check',
                        title: 'Sauvegarder',
                        id: 'btnSaveParameters',
                        hidden: true
                    }
                ]
            }
        ]
    }
});
