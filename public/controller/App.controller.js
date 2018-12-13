sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/basicTemplate/model/formatter"
], function(Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {

			var data = {
				"ahorro" : "mucho",
				"gasto" : "poco"
			};

			this.getView().setModel(new JSONModel(data), "tt");
			console.log(data);

		}
	});
});
