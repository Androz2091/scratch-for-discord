import Blockly from "blockly";
import localforage from "localforage";

const DISABLED_EVENTS = [
  Blockly.Events.BUBBLE_OPEN,
  Blockly.Events.BUMP_EVENTS,
  Blockly.Events.CLICK,
  Blockly.Events.FINISHED_LOADING,
  Blockly.Events.SELECTED,
  Blockly.Events.THEME_CHANGE,
  Blockly.Events.TOOLBOX_ITEM_SELECT,
  Blockly.Events.TRASHCAN_OPEN,
  Blockly.Events.UI,
  Blockly.Events.VIEWPORT_CHANGE,
];

export default async function register(workspace) {
  const [key] = await localforage.keys();
  const xml = await localforage.getItem(key);
  console.log(xml);
  Blockly.Xml.domToWorkspace(
    Blockly.Xml.textToDom(xml),
    workspace
  );

  workspace.addChangeListener((event) => {
    if (DISABLED_EVENTS.includes(event.type)) return;
    console.log(event.type)
    handle(workspace);
  });
}

async function handle(workspace) {
  const content = Blockly.Xml.domToPrettyText(
    Blockly.Xml.workspaceToDom(workspace)
  );
  const fileName = `${encodeURIComponent(
    document.querySelector("#docName").textContent
  ).replace(/%20/g, " ")}`;

  await localforage.setItem(fileName, content);
}
