import * as Blockly from "blockly/core";
import localforage from "localforage";
import { dialog } from "./dialogs";
import store from "./store";

export async function restoreAutosave(t) {
    const keys = await localforage.keys();
    if (!keys.length) return;
    const select = document.createElement("select");
    select.className = "form-select mt-3";
    select.append(...keys.map((key) => new Option(key, key)));
    const html = document.createElement("div");
    html.append(t("autosave.text"), select);
    const result = await dialog.fire({
        title: t("autosave.title"),
        html,
        showCancelButton: true,
        cancelButtonText: t("autosave.cancel"),
        confirmButtonText: t("autosave.restore")
    });
    if (!result.isConfirmed) return;
    const xml = await localforage.getItem(select.value);
    Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(xml), store.workspace);
    store.docName = select.value;
}

export function autosave(workspace) {
    const content = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
    return localforage.setItem(store.docName, content);
}

export function removeAutosave(docName) {
    return localforage.removeItem(docName);
}
