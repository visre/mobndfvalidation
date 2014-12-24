Ext.define('mobndf.store.Ndf', {
  extend : 'Ext.data.Store',
  config: {
    model: 'mobndf.model.Ndf',
    autoLoad: false,
    onlineProxy: {
      type: 'ajax',
      headers: {
        'Accept' : 'application/json'
      },
      url: mobndf.util.Util.api.search,
      reader: {
        type: 'json',
        rootProperty: 'result'
      }
    },
    localStorageProxy: 'Ndflocal',
    offlineProxy: {
      type : 'localstorage',
      id: 'ndflocal'
    }
  }
});