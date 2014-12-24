Ext.define('mobndf.store.Ndfpendingbymonths', {
  extend : 'Ext.data.Store',
  requires: [
    'Ext.device.Connection',
    'Ext.data.proxy.LocalStorage'
  ],
  config: {
    model: 'mobndf.model.Ndfpending',
    autoLoad: false,
    sorters: 'id',
    onlineProxy: {
      type: 'ajax',
      headers: {
        'Accept' : 'application/json'
      },
      url: mobndf.util.Util.api.getpendingbymonths,
      reader: {
        type: 'json',
        rootProperty: 'result'
      }
    },
    localStorageProxy: 'NdfpendingbymonthsLocal',
    offlineProxy: {
      type : 'localstorage',
      id: 'ndfpendingbymonthslocal'
    }

  }
});