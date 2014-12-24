Ext.define("mobndf.view.Ndfcharts", {
    extend: 'Ext.Panel',
    xtype: "ndfcharts",
    fullscreen:true,
    config: {
        layout: 'vbox',
        items: [
            {
                xtype: "container",
                flex: 1,
                layout: "hbox",
                items: [
                    {
                        xtype: "container",
                        flex: 1,
                        layout:"vbox",
                        html: '<div id="chartdiv1"><div>'
                    },
                    {
                        xtype: "container",
                        flex: 1,
                        layout:"vbox",
                        html: '<div id="chartdiv2"><div>'
                    }
                ]
            }            ,
            {
                xtype: "container",
                flex: 1,
                layout: "hbox",
                items: [
                    {
                        xtype: "container",
                        flex: 1,
                        layout:"vbox",
                        html: '<div id="chartdiv3"><div>'
                    },
                    {
                        xtype: "container",
                        flex: 1,
                        layout:"vbox",
                        html: '<div id="chartdiv4"><div>'
                    }
                ]
            }               
        ]
    }
});