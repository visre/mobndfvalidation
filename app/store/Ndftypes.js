Ext.define('mobndf.store.Ndftypes', {
  extend : 'Ext.data.Store',
  requires: [
    'Ext.device.Connection',
    'Ext.data.proxy.LocalStorage'
  ],
  config: {
    model: 'mobndf.model.Ndftype',
    autoLoad: false,
    sorters: 'name',
    onlineProxy: {
      type: 'ajax',
      headers: {
        'Accept' : 'application/json'
      },
      url: mobndf.util.Util.api.gettypes,
      reader: {
        type: 'json',
        rootProperty: 'result'
      }
    },
    localStorageProxy: 'NdftypesLocal',
    offlineProxy: {
      type : 'localstorage',
      id: 'ndftypeslocal'
    }

  }
});