sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/basicTemplate/model/formatter"
], function(Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Main", {

		formatter: formatter,

		onInit: function () {

			var data = {
				"ahorro" : "mucho",
				"gasto" : "poco"
			};

			this.getView().setModel(new JSONModel(data), "tt");
			console.log(data);

		},

		onResett: function(oEvent) {
			// get the field and resett the values
			var oAnvId = this.byId("anvId");
			var oForId = this.byId("forId");
			var oTjaId = this.byId("tjaId");
			var oDatId = this.byId("datId");
			var oInAvtId = this.byId("inAvtId");
			// resett the values
			oAnvId.setValue();
			oForId.setValue();
	  	oTjaId.setValue();
			oDatId.setValue();
			oInAvtId.setSelected();
		},
		onSearch: function(oEvent) {
			// get fields values
			//
			console.log("I must search data");
			console.log(oEvent);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("detail");
		}
	});
});
