Ext.define('mobndf.view.Ndftypes', {
  extend: 'Ext.dataview.List',
  xtype: 'ndftypes',
  config: {
    cls: 'ndftype-list',
    store: 'Ndftypes',
    ui : 'round',
   onItemDisclosure : true,
   pinHeaders : false,
    itemTpl: '{name}',
    emptyText : 'Aucun type de note de frais disponible',
    title: 'Type de frais...'
  }
});