Ext.define('mobndf.model.Parameters', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
  	  "name",
  	  "server",
  	  "isSecure",
      "port"
    ],
    idProperty:'guid',
    identifier:'uuid'
  }
});