Ext.define('mobndf.store.Ndfcollaborators', {
  extend : 'Ext.data.Store',
  requires: [
    'Ext.device.Connection',
    'Ext.data.proxy.LocalStorage'
  ],
  config: {
    model: 'mobndf.model.Ndfcollaborator',
    autoLoad: false,
    sorters: 'id',
    onlineProxy: {
      type: 'ajax',
      headers: {
        'Accept' : 'application/json',
      },
      url: mobndf.util.Util.api.getcollaborators,
      // url: 'https://sagefrp1000.cloudapp.net:443/mobndfmanagers/sdata/mobndfmanagersPackage',
      reader: {
        type: 'json',
        rootProperty: 'result'
      }
    },
    localStorageProxy: 'NdfcollaboratorsLocal',
    offlineProxy: {
      type : 'localstorage',
      id: 'ndfcollaboratorslocal'
    }

  }
});