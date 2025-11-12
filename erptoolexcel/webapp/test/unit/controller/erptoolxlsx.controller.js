/*global QUnit*/

sap.ui.define([
	"com/ranpak/erptoolexcel/controller/erptoolxlsx.controller"
], function (Controller) {
	"use strict";

	QUnit.module("erptoolxlsx Controller");

	QUnit.test("I should test the erptoolxlsx controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
