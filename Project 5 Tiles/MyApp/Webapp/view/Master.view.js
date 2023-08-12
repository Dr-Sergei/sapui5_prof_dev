sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {
    getControllerName: function () {
        return "sapui5.demo.mvcapp.controller.Master";
    },

    createContent: function (oController) {
        // Here we will create our UI via JS coding
        // =======================================================================================================================
        var oTileTemplate = new sap.m.StandardTile({
            icon: "{icon}",
            title: "{Name}",
            info: "{Place}"
        })

        var oTileCont = new sap.m.TileContainer({

        })
        oTileCont.bindAggregation("tiles", "/names", oTileTemplate)

        var oPage = new sap.m.Page({
            title: "Simple Tiles",
            content: [
                oTileCont
            ]
        });

        return oPage;
        // =======================================================================================================================
    }
});
