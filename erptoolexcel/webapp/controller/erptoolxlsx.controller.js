sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("com.ranpak.erptoolexcel.controller.erptoolxlsx", {
        onInit: function () {
            this._downloadFile();
        },

        _downloadFile: async function () {
            var cardId = "com.ranpak.erptoolexcel";
            cardId = cardId.replace(/\./g, "/");

            var oPath = sap.ui.require.toUrl(cardId + "/artifacts") + "/Batch-calculation-paper.xlsx";

            try {
                const response = await fetch(oPath,{ cache: "no-store" });
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                } 
               
                const blob = await response.blob();
                const link = document.createElement("a");
                const url = window.URL.createObjectURL(blob);
                link.href = url;
                link.download = "Batch-calculation-paper.xlsx ";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setTimeout(() => window.URL.revokeObjectURL(url), 10);

                Promise.resolve().then(() => {
                    if (window.history.length > 1) {
                        window.history.back();
                    }
                });

            } catch (e) {
                console.error("Download failed:", e);
            }
        }
    });
});
