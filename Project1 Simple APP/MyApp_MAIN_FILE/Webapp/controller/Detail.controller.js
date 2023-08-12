sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    'use strict';

    return Controller.extend("sapui5.demo.mvcapp.controller.Detail", {
        // Your controller logic can be added here
        // =======================================================================================================================

        onNavPress: function () {
            oApp.back();
        }





        // =======================================================================================================================

    });
});