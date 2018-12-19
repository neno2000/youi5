sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/basicTemplate/model/formatter"
], function(Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Main", {

		formatter: formatter,

		onInit: function () {
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
			var anvandare = this.byId("anvId").getValue();
			var foretag = this.byId("forId").getValue();
			var tjanst = this.byId("tjaId").getValue();
			var datum = this.byId("datId").getValue().toString();

			var avtalsplan = this.byId("inAvtId").getSelected();

			var qs = "";
		  if (anvandare) {
				qs = qs + "&anvandare=" + anvandare;
				console.log(qs);
			}
			if (foretag) {
				qs = qs + "&orgnummer=" + foretag;
				console.log(qs);
			}

			if (tjanst) {
				qs = qs + "&tjanst=" + tjanst;
				console.log(qs);
			}

			if (datum) {
			  qs = qs + "&datum=" + datum;
				console.log(qs);
			}

			if (avtalsplan) {
				qs = qs + "&avtalsplan=" + "X";
				console.log(qs);
			}
			// do the Ajax Call
      var baseUrl = "http://localhost:5000";
			var client = "120";
			var urlPath = "/sap/bc/collectum/foretag/organisation/organisation";
			var url = baseUrl + urlPath + "?" + "sap-client=" + client + qs;
			console.log(url);
			var settings = {
			  "async": true,
			  "crossDomain": true,
			  "url": url,
			  "method": "GET",
			  "headers": {
			    "cache-control": "no-cache",
			  }
			}

      var that = this;

			$.ajax(settings).done(function (response) {
			  var myModel = new sap.ui.model.json.JSONModel(response);
				sap.ui.getCore().setModel(myModel,"oParams");
				var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
				oRouter.navTo("Detail");
			});

		}

	});
});
