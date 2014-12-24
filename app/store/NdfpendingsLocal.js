Ext.define('mobndf.store.NdfpendingsLocal', {
  extend : 'Ext.data.Store',
  config: {
    model: 'mobndf.model.Ndf',
    autoLoad: false,
    sorters: 'id',
    proxy: {
      type : 'localstorage',
      id: 'ndfpendingslocal'
    }
  }
});