Ext.define("mobndf.model.Ndfchart", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            "guid",
            "statut0",
            "montant0",
            "color0",
            "title0",
            "statut1",
            "montant1",
            "color1",
            "title1",
            "statut2",
            "montant2",
            "color2",
            "title2",
            "statut3",
            "montant3",
            "color3",
            "title3"
        ],
    idProperty:'guid',
    identifier:'uuid'
    }
});
