sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {
    getControllerName: function () {
        return "sapui5.demo.mvcapp.controller.Master";
    },

    createContent: function (oController) {
        // Here we will create our UI via JS coding
        // =======================================================================================================================
        var oTile1 = new sap.m.StandardTile({
            title: "Dinosaur",
            info: "Mountain",
            icon: "sap-icon://sap-ui5"
        })
        var oTile2 = new sap.m.StandardTile({
            title: "Elephants",
            info: "Forest",
            icon: "sap-icon://general-leave-request"
        })
        var oTile3 = new sap.m.StandardTile({
            title: "Whale",
            info: "Sea",
            icon: "sap-icon://map-2"
        })
        var oTile4 = new sap.m.StandardTile({
            title: "Duck",
            info: "Water",
            icon: "sap-icon://travel-expense"
        })

        var oTileCont = new sap.m.TileContainer({
            tiles: [
                oTile1,
                oTile2,
                oTile3,
                oTile4
            ]
        })

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
