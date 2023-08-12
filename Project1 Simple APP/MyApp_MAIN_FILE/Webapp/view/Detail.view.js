sap.ui.jsview("sapui5.demo.mvcapp.view.Detail", {
    getControllerName: function () {
        return "sapui5.demo.mvcapp.controller.Detail"; // Corrected typo: "sapui5.demo.mvsapp.controller.Master" to "sapui5.demo.mvcapp.controller.Master"
    },

    createContent: function (oController) {
        // Here we will create our UI via JS coding
        // =======================================================================================================================

        var oLabel = new sap.m.Label("idLabel", {

        });

        var oPageDetail = new sap.m.Page({
            title: "Supplier Detail",
            showNavButton: true,
            navButtonPress: [oController.onNavPress, oController],
            content: [oLabel]
        })
        return oPageDetail;
    }
    // =======================================================================================================================

})
