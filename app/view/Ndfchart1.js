Ext.define('mobndf.view.Ndfchart1', {
  extend: 'Ext.chart.Chart',
  xtype: 'ndfchart1',
  config: {
    store : 'Ndfchart',
     series: [{
          type: 'pie',
          showInLegend: true,
          field: 'montant0',
          label: { //the label inside each pie
              field: 'statut0',
              font: '20px Arial',
              display: 'rotate',
              contrast: true
          }
      }]
  }
});