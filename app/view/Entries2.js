Ext.define('mobndf.view.Entries2', {
  extend: 'Ext.dataview.DataView',
  xtype: 'entries2',
  config: {
    title: 'Notes de frais',
    baseCls: 'entries',
    store : 'Entries',
    itemTpl : '<div class="icon"><i class="{image}"></i></div><div class="label">{label}</div>'

  }
});