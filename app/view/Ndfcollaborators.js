Ext.define('mobndf.view.Ndfcollaborators', {
  extend: 'Ext.List',
  xtype: 'ndfcollaborators',
  config: {
    scrollable: true,
    cls:'dataview-inline ndfs',
    itemTpl: new Ext.XTemplate('<div class="subtitle"><span class="title-left">{name}</span></div><div class="bottom"><span class="bottom-lef">{firstname}</span></div>'),
    store:'Ndfcollaborators',
    emptyText : 'Aucun collaborateur',
    title: 'Mes collaborateurs'
  }
});
