sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {
    getControllerName: function () {
        return "sapui5.demo.mvcapp.controller.Master";
    },

    createContent: function (oController) {
        // Here we will create our UI via JS coding
        // =======================================================================================================================

        var oCol1 = new sap.ui.table.Column({
            label: new sap.m.Label({
                text: "Name"
            }),
            template: new sap.m.Text({
                text: "Name: {Name}"
            })

        });

        var oCol2 = new sap.ui.table.Column({
            label: new sap.m.Label({
                text: "Place"
            }),
            template: new sap.m.Text({
                text: "Place: {Place}"
            })
        });

        var oCol3 = new sap.ui.table.Column({
            label: new sap.m.Label({
                text: "Id"
            }),
            template: new sap.m.Text({
                text: "Id: {Id}"
            })
        });

        var oTable = new sap.ui.table.Table({ // Corrected typo: "Tabele" to "Table"
            title: "Simple Table",
            columns: [
                oCol1,
                oCol2,
                oCol3
            ]
        });

        oTable.bindItems({
            path: "/names",
            template: oTemp
        });
        var oPage = new sap.m.Page({
            title: "Table",
            content: [
                oTable
            ]
        });

        return oPage;
        // =======================================================================================================================

    },
});
