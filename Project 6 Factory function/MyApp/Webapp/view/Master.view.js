sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {
    getControllerName: function () {
        return "sapui5.demo.mvcapp.controller.Master";
    },

    createContent: function (oController) {
        // Here we will create our UI via JS coding
        // =======================================================================================================================
        var oList = new sap.m.List({
            headerText: "Animals"
        })

        oList.bindAggregation(
            "items",
            "/names",
            function (sId, oContext) {
                var sValue = oContext.getProperty("Name");
                var sDec1 = "ARe still roaming arround"
                var sDec2 = "Are extinct"
                if (sValue === "Dinosaurs") {
                    return new sap.m.StandardListItem({
                        title: sValue,
                        description: sDec2
                    })
                } else {
                    return new sap.m.StandardListItem({
                        title: sValue,
                        description: sDec1
                    })
                }
            }
        )



        var oPage = new sap.m.Page({
            title: "List Page",
            content: [
                oList
            ]
        });

        return oPage;
        // =======================================================================================================================
    }
});
