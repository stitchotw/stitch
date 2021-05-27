class ButtonClickHandler {

    fileNewPatternButtonClick() { console.log("New pattern"); }

    fileOpenPatternButtonClick() { console.log("Open pattern"); }

    fileImportImageButtonClick() { console.log("Import image"); }

    fileSaveToLocalStorageButtonClick() { console.log("Save to local storage"); }

    fileSaveToFileButtonClick() { console.log("Save to file"); }

    filePrintPatternButtonClick() { 
        console.log("Print pattern"); 
        window.print();
    }

    fileExportToPngButtonClick() { console.log("Export PNG"); }

    fileExportToSvgButtonClick() { console.log("Export SVG"); }

    fileExportToHtmlButtonClick() { console.log("Export HTML"); }

    fileExportToPearlButtonClick() { console.log("Export pearl boards"); }

}

export const handler = new ButtonClickHandler();