Ext.define('mobndf.model.Ndf', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      "guid", 
      "id",
      "header",
  	  "type",
  	  "name",
      "firstname",
  	  "mode",
      "modeString",
  	  {name : "date", type : 'date', dateFormat: 'd/m/Y', defaultValue : new Date()},
  	  {name : "amount", type : 'float', defaultValue : 0.0, decimalSeparator: ','},
      "currency",
      {name : "quantity", type : 'int', defaultValue : 1}, 
      {name : "km", type : 'int', defaultValue : 1},
      "ref",
      "reason",
      "photo",
      "status",
      "statusString",
      "etape",
      "evidence",
      "docListCount"
    ],
    idProperty:'guid',
    identifier:'uuid'
  }
});