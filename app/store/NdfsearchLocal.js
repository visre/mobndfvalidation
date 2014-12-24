Ext.define('mobndf.store.NdfsearchLocal', {
  extend : 'Ext.data.Store',
  config: {
    model: 'mobndf.model.Ndf',
    autoLoad: false,
    sorters: 'name',
    proxy: {
      type : 'localstorage',
      id: 'ndfsearchlocal'
    }
  }
});