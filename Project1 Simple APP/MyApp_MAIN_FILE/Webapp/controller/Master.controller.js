sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    'use strict';

    return Controller.extend("sapui5.demo.mvcapp.controller.Master", {
        // Your controller logic can be added here
        // =======================================================================================================================

        // goToSecondPage: function (oEvent) {
        //     var sPageId = "detailPage";
        //     oApp.to(sPageId);

        //     var oPage = oApp.getPage(sPageId);
        //     var oContext = oEvent.getSource().getBindingContext();
        //     oPage.setBindingContext(oContext);
        // }

        goToSecondPage: function (oEvnt) {

            var oLabel = sap.ui.getCore().byId("idLabel");
            var oInputVal = sap.ui.getCore().byId("idInput").getValue();



            if (oInputVal !== undefined) {
                oLabel.setText(oInputVal);
                oApp.to("detailPage");
            }
        }






        // =======================================================================================================================

    });
});
