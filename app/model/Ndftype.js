Ext.define('mobndf.model.Ndftype', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
    "guid",
      "id", 
	  "name",
	  "code",
	  "mode",
	  "allowOver",
	  "amountMax"
      ],
    idProperty:'guid',
    identifier:'uuid'
  }
});