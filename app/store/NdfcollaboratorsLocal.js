Ext.define('mobndf.store.NdfcollaboratorsLocal', {
  extend : 'Ext.data.Store',
  config: {
    model: 'mobndf.model.Ndfcollaborator',
    autoLoad: false,
    sorters: 'id',
    proxy: {
      type : 'localstorage',
      id: 'ndfcollaboratorslocal'
    }
  }
});