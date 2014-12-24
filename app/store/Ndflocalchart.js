Ext.define('mobndf.store.Ndflocalchart', {
  extend : 'Ext.data.Store',
  config: {
    model: 'mobndf.model.Ndfchart',
    autoLoad: false,
    proxy: {
      type : 'localstorage',
      id: 'ndflocalchart'
    }
  }
});