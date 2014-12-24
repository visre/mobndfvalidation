Ext.define('mobndf.view.Ndf', {
  extend: 'Ext.form.Panel',
  xtype: 'ndf',
  requires: [
    'mobndf.model.Ndf'
  ],
  config: {
    items: [
      {
        xtype:'fieldset',
        // title:'Note de frais à valider',
        disabled : true,
        // instructions: 'Veuillez renseigner les informations ci-dessus.',
        items : [
          {
            xtype:'textfield',
            id:'fieldId',
            name:'Id',
            label:'id'
          },
          {
            xtype:'textfield',
            id:'fieldName',
            name:'Salarie',
            label:'Salarié'
          },
          {
            xtype:'textfield',
            id:'fieldStep',
            name:'Etape',
            label:'Etape'
          },
          {
            xtype:'textfield',
            id:'fieldStatus',
            name:'Statut',
            label:'Statut'
          },
          {
            xtype:'textfield',
            id:'fieldRef',
            name:'reference',
            label:'Référence',
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
            //  yearFrom:1990
            // }
          },
          {
            xtype:'textfield',
            id:'fieldType',
            name:'Type',
            label:'Type'
          },
          {
            xtype:'textfield',
            id:'fieldModeString',
            name:'Mode de remboursement',
            label:'Mode de remboursement',
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
            xtype:'textfield',
            id:'fieldRaison',
            name:'reason',
            label:'Motif'
          },
          {
            xtype:'textfield',
            id:'fieldEvidence',
            name:'evidence',
            label:'Justificatif'
          },
          {
            xtype:'numberfield',
            id:'fieldDocListCount',
            name:'docListCount',
            label:'Nombre de pièces jointes'
          },
          {
            xtype:'capturepicture',
            id:'fieldCapture'
          }
        ],
      },
      {
        xtype: 'button',
        id: 'validNdfBtn',
        text: 'Valider',
        hidden: true
      },
      { 
        xtype: 'spacer' 
      },
      {
        xtype : 'button',
        id: 'refuseNdfBtn',
        text: 'Refuser',
        hidden: true
      }   
    ],
    listeners: [
      {
        delegate: '#validNdfBtn',
        event: 'tap',
        fn: 'onValidNdfBtnTap'
      },
      {
        delegate: '#refuseNdfBtn',
        event: 'tap',
        fn: 'onRefuseNdfBtnTap'
      }
    ]
  },
  onValidNdfBtnTap: function(){
    this.fireEvent('validNdfBtnTapCommand', this);
  },
  onRefuseNdfBtnTap: function(){
    this.fireEvent('refuseNdfBtnTapCommand', this);
  }

}); 