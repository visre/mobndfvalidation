Ext.define('mobndf.store.Ndfchart', {
  extend : 'Ext.data.Store',
  config: {
    model: 'mobndf.model.Ndfchart',
    autoLoad: false,
    onlineProxy: {
      type: 'ajax',
      headers: {
        'Accept' : 'application/json'
      },
      url: mobndf.util.Util.api.charts,
      reader: {
        type: 'json',
        rootProperty: 'result'
      }
    },
    localStorageProxy: 'Ndflocalchart',
    offlineProxy: {
      type : 'localstorage',
      id: 'ndflocalchart'
    }
  }
});