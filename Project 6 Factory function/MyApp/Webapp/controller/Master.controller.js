sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    'use strict';

    return Controller.extend("sapui5.demo.mvcapp.controller.Master", {
        // Your controller logic can be added here
        // =======================================================================================================================
        onInit: function () {
            var oData = {
                names: [
                    {
                        icon: "sap-icon://sap-ui5",
                        Name: "Dinosaurs",
                        Place: "Mountains",
                    },
                    {
                        icon: "sap-icon://general-leave-request",
                        Name: "Elephant",
                        Place: "Forest",
                    },
                    {
                        icon: "sap-icon://map-2",
                        Name: "Whale",
                        Place: "Sea",
                    },
                    {
                        icon: "sap-icon://travel-expense",
                        Name: "Duck",
                        Place: "Water",
                    },
                    // {
                    //     icon: 5,
                    //     Name: "Monkey",
                    //     Place: "Tree",
                    // },
                ],
            };

            var oModel = new sap.ui.model.json.JSONModel(oData);

            sap.ui.getCore().setModel(oModel);

        }
        // =======================================================================================================================
    });
});
