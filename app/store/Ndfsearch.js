Ext.define('mobndf.store.Ndfsearch', {
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
    localStorageProxy: 'NdfsearchLocal',
    offlineProxy: {
      type : 'localstorage',
      id: 'ndfsearchlocal'
    }
  }
});