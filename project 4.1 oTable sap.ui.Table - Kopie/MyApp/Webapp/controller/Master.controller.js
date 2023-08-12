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
                        Id: 1,
                        Name: "Dinosaurs",
                        Place: "Mountains",
                    },
                    {
                        Id: 2,
                        Name: "Elephant",
                        Place: "Forest",
                    },
                    {
                        Id: 3,
                        Name: "Whale",
                        Place: "Sea",
                    },
                    {
                        Id: 4,
                        Name: "Duck",
                        Place: "Water",
                    },
                    {
                        Id: 5,
                        Name: "Monkey",
                        Place: "Tree",
                    },
                ],
            };

            var oModel = new sap.ui.model.json.JSONModel(oData);

            sap.ui.getCore().setModel(oModel);

        }
        // =======================================================================================================================
    });
});
