Ext.define('mobndf.view.Parameters', {
  extend: 'Ext.form.Panel',
  xtype: 'parameters',
  requires: [
    'mobndf.model.Parameters'
  ],
  config: {
    items: [
      {
        xtype:'fieldset',
        store:'ParametersLocal',
        // instructions: 'Veuillez renseigner les informations ci-dessus.',
        items : [
          {
            xtype:'textfield',
            id:'fieldName',
            name:'Name',
            label:'Nom'
          },
          {
            xtype:'textfield',
            id:'fieldServer',
            name:'Server',
            label:'Serveur'
          },
          {
            xtype:'checkboxfield',
            id:'fieldSecure',
            name:'Secure',
            label:'Sécurisé'
          },
          {
            xtype:'numberfield',
            id:'fieldPort',
            name:'Port',
            label:'Port'
          }
        ]
      }
    ]
  }
}); 