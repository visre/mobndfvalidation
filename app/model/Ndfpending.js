Ext.define('mobndf.model.Ndfpending', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
    "guid",
    "id",
    "header",
    "user",
    "sub"
	  // "code",
	  // "mode",
	  // "allowOver",
	  // "amountMax"
      ],
    idProperty:'guid',
    identifier:'uuid'
  }
});