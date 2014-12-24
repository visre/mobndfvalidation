Ext.define('mobndf.store.NdfpendingbymonthsLocal', {
  extend : 'Ext.data.Store',
  config: {
    model: 'mobndf.model.Ndfpending',
    autoLoad: false,
    sorters: 'name',
    proxy: {
      type : 'localstorage',
      id: 'ndfpendingbymonthslocal'
    }
  }
});