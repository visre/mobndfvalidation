Ext.define('mobndf.store.Entries', {
  extend: 'Ext.data.Store',
  config: {
    model: 'mobndf.model.Entry',
    autoLoad: true,
    proxy: {
      type: 'ajax',
      url: mobndf.util.Util.api.entries,
      reader: {
        type: 'json',
        rootProperty: 'entries'
      }
    }
  }
});