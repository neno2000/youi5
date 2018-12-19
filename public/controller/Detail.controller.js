sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/basicTemplate/model/formatter"
], function(Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Detail", {

		formatter: formatter,

		onInit: function () {
			var myModel = sap.ui.getCore().getModel("oParams");
			var oTable = this.byId("idKstTable");
			var orgno = myModel.getData().orgno[0].orgNr;
	    this.getView().byId("idOrgNo").setText(orgno);
			var forNamn = myModel.getData().orgno[0].ftgnamn;
			this.getView().byId("idOrgNamn").setText(forNamn);
			var bpNo = myModel.getData().orgno[0].foretag;
			this.getView().byId("bpNo").setText(bpNo);
			oTable.setModel(myModel);
			console.log(oTable);
		},
		_handleRouteMatched: function (evt) {

		//load a model, show a dialog
			console.log(this);
			console.log(evt);

	  },

		onNavBack: function () {
			history.go(-1);
		}
	});
});
