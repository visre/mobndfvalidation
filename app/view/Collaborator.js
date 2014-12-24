Ext.define('mobndf.view.Collaborator', {
  extend: 'Ext.form.Panel',
  xtype: 'collaborator',
  requires: [
    'mobndf.model.Ndfcollaborator'
  ],
  config: {
    items: [
      {
        xtype:'fieldset',
        // title:'Note de frais à valider',
        disabled: true,
        items : [
          {
            xtype:'textfield',
            id:'fieldId',
            name:'Id',
            label:'id',
            hidden : true
          },
          {
            xtype:'textfield',
            id:'fieldActive',
            name: 'active',
            label: 'Actif'
          },
          {
            xtype:'textfield',
            id:'fieldName',
            name:'nom',
            label:'Nom'
          },
          {
            xtype:'textfield',
            id:'fieldFirstName',
            name:'prenom',
            label:'Prénom'
          },
          {
            xtype:'textfield',
            id:'fieldTelephone',
            name:'telephone',
            label:'Téléphone'
          },
          {
            xtype:'textfield',
            id:'fieldMobile',
            name:'mobile',
            label:'Mobile'
          },
          {
            xtype:'textfield',
            id:'fieldEmail',
            name:'mail',
            label:'Email'
          }
        ]
      }
    ],
    listeners: [
      {
        delegate: '#callCollabBtn',
        event: 'tap',
        fn: 'onCallCollabBtnTap'
      },
      {
        delegate: '#sendMailCollabBtn',
        event: 'tap',
        fn: 'onsendMailCollabBtnTap'
      }
    ]
  },
  onCallCollabBtnTap: function(){
    this.fireEvent('callCollabBtnTapCommand', this);
  },
  onsendMailCollabBtnTap: function(){
    this.fireEvent('sendMailCollabBtnTapCommand', this);
  }
}); 

