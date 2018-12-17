sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/basicTemplate/model/formatter"
], function(Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {
	//		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	//		oRouter.navTo("Main");
		}
	});
});
