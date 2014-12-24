Ext.define('mobndf.view.Ndfpendingbymonths', {
  extend: 'Ext.dataview.List',
  xtype: 'ndfpendingbymonths',
  config: {
    cls: 'ndfpending-list',
    store: 'Ndfpendingbymonths',
    ui : 'round',
   onItemDisclosure : true,
   pinHeaders : false,
    itemTpl: '{id}',
    emptyText : 'Aucune note de frais disponible',
    title: 'Notes de frais...'
  }
});