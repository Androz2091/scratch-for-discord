import Blockly from "blockly";
import localforage from "localforage";
import Swal from "sweetalert2";

const DISABLED_EVENTS = [
  Blockly.Events.BUBBLE_OPEN,
  Blockly.Events.BUMP_EVENTS,
  Blockly.Events.CLICK,
  Blockly.Events.BLOCK_DRAG,
  Blockly.Events.FINISHED_LOADING,
  Blockly.Events.SELECTED,
  Blockly.Events.THEME_CHANGE,
  Blockly.Events.TOOLBOX_ITEM_SELECT,
  Blockly.Events.TRASHCAN_OPEN,
  Blockly.Events.UI,
  Blockly.Events.VIEWPORT_CHANGE,
];

export default async function register(self) {
  const workspace = self.$store.state.workspace;
  const keys = await localforage.keys();

  if (keys?.length) {
    Swal.fire({
      title: self.$t("autosave.title"),
      html: `
        ${self.$t("autosave.text")}<br><br>
        <select class="custom-select" id="restore-select">
            ${keys.map((key) => `<option><b>${key}</b></option>`)}
        </select>
      `,
      showCancelButton: true,
      cancelButtonText: self.$t("autosave.cancel"),
      confirmButtonText: self.$t("autosave.restore"),
      preConfirm: async () => {
        const select = document.getElementById("restore-select");
        const xml = await localforage.getItem(select.value);
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
      },
    })
  }

  workspace.addChangeListener((event) => {
    if (DISABLED_EVENTS.includes(event.type)) return;
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
