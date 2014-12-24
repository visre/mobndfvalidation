Ext.define('mobndf.store.NdftypesLocal', {
  extend : 'Ext.data.Store',
  config: {
    model: 'mobndf.model.Ndftype',
    autoLoad: false,
    sorters: 'name',
    proxy: {
      type : 'localstorage',
      id: 'ndftypeslocal'
    }
  }
});