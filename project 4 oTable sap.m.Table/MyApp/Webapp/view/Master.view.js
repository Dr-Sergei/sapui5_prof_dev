sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {
    getControllerName: function () {
        return "sapui5.demo.mvcapp.controller.Master";
    },

    createContent: function (oController) {
        // Here we will create our UI via JS coding
        // =======================================================================================================================

        var oCol1 = new sap.m.Column({
            header: new sap.m.Label({
                text: "Name"
            })
        });

        var oCol2 = new sap.m.Column({
            header: new sap.m.Label({
                text: "Place"
            })
        });

        var oCol3 = new sap.m.Column({
            header: new sap.m.Label({
                text: "Id"
            })
        });

        var oTable = new sap.m.Table({ // Corrected typo: "Tabele" to "Table"
            title: "Simple Table",
            columns: [
                oCol1,
                oCol2,
                oCol3
            ]
        });

        var oTemp = new sap.m.ColumnListItem({
            cells: [
                new sap.m.Text({
                    text: "{Name}"
                }),
                new sap.m.Text({
                    text: "{Place}"
                }),
                new sap.m.Text({
                    text: "{Id}"
                })
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
