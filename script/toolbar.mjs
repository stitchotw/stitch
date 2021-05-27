import { handler as fileHandler } from "./file.mjs";
import { handler as toolsHandler } from "./tools.mjs";

const handlers = [fileHandler, toolsHandler];

export function initToolbars() {
    console.info("Initializing toolbars");

    const buttons = document.getElementsByClassName("toolbar-button");

    for (let i = 0; i < buttons.length; i++) {
        let name = buttons[i].id;

        // To camelCase
        name = name.replace(/-([a-z])/gi, function (s, group1) {
            return group1.toUpperCase();
        });

        name += "Click";

        let found = false;
        handlers.forEach((handler) => {
            const listener = handler[name];
            if (listener) {
                buttons[i].addEventListener("click", listener);
                found = true;
            }
        });

        if (!found) {
            console.warn(`Method ${name} not found`);
        }
    }

}
class ToolbarButtonHandler {
    toolsDrawButtonClick() {
        console.log("asdsad");
    }
}