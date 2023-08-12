sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {
    getControllerName: function () {
        return "sapui5.demo.mvcapp.controller.Master"; // Corrected typo: "sapui5.demo.mvsapp.controller.Master" to "sapui5.demo.mvcapp.controller.Master"
    },

    createContent: function (oController) {
        // Here we will create our UI via JS coding
        // =======================================================================================================================
        var oInput = new sap.m.Input("idInput", {
            placeholder: "Enter your name: "
        })
        var oButton = new sap.m.Button("idButton", {
            text: "Submit",
            press: [oController.goToSecondPage, oController],

        })



        // Creating a master page and adding a Table to it
        var oPageMaster = new sap.m.Page({
            title: "Simple App",
            content: [oInput,
                oButton],
        });

        return oPageMaster;
        // =======================================================================================================================

    },
});
