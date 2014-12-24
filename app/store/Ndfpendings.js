Ext.define('mobndf.store.Ndfpendings', {
  extend : 'Ext.data.Store',
  requires: [
    'Ext.device.Connection',
    'Ext.data.proxy.LocalStorage'
  ],
  config: {
    // model: 'mobndf.model.Ndfpending',
    model : 'mobndf.model.Ndf',
    autoLoad: true,
    sorters: 'name',
    onlineProxy: {
      type: 'ajax',
      headers: {
        'Accept' : 'application/json'
      },
      url: mobndf.util.Util.api.getpendings,
      reader: {
        type: 'json',
        rootProperty: 'result'
      }
    },
    localStorageProxy: 'NdfpendingsLocal',
    offlineProxy: {
      type : 'localstorage',
      id: 'ndfpendingslocal'
    },
    grouper: {
      property: 'name',
      direction: 'ASC'
    }
  }
});