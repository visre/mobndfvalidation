Ext.define('mobndf.store.ParametersLocal', {
  extend : 'Ext.data.Store',
  config: {
    model: 'mobndf.model.Parameters',
    autoLoad: true,
    singleton: true,
    proxy: {
      type : 'localstorage',
      id: 'parameterslocal'
    }
  }
});