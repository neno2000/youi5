sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/basicTemplate/model/formatter"
], function(Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Main", {

		formatter: formatter,

		onInit: function () {
			console.log(location.hostname);
			console.log(location.port);
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
			}
			if (foretag) {
				qs = qs + "&orgnummer=" + foretag;
			}

			if (tjanst) {
				qs = qs + "&tjanst=" + tjanst;
			}

			if (datum) {
				//convert datum till agreed format
				var d = datum.split('/');
				datum = [d[2], d[1], d[0]].join('-');
			  qs = qs + "&datum=" + datum;
			}

			if (avtalsplan) {
				qs = qs + "&avtalsplan=" + "X";
			}

			// before an AJAX call, get the configuration information to
			// retrieve to make the rigth AJAX call
			var conf = this.getView().getModel("conf").getData();
			// do the Ajax Call, set default data
			var client = "100";		    		//default value, manually sätt during dev
      var baseUrl = "";							//dafault value in CRM
      if (conf.conf[location.hostname].baseUrl){
				baseUrl = conf.conf[location.hostname].baseUrl;
			}
			if (conf.conf[location.hostname].client) {
				client =  conf.conf[location.hostname].client;
			}
			var urlPath = conf.services.organisation;
			console.log(client);
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
