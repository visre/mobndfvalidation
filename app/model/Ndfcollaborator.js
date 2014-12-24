Ext.define('mobndf.model.Ndfcollaborator', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
    "guid",
    "id", 
	  "active",
    "name",
    "firstname",
    "mobile",
    "telephone",
    "email"
      ],
    idProperty:'guid',
    identifier:'uuid'
  }
});