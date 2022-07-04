import Blockly from "blockly";
import localforage from "localforage";
import Swal from "sweetalert2";
/* eslint-disable */

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
  console.log('started!')
  setTimeout(async () => {
    const workspace = self.$store.state.workspace;
    const xml = await localforage.getItem("save3");
    if (xml !== null) {
      if (xml.length > 61) {
        Swal.fire({
          title: self.$t("autosave.title2"),
          showDenyButton: true,
          icon: "question",
          denyButtonText: self.$t("autosave.cancell"),
          confirmButtonText: self.$t("autosave.confirm"),
          preConfirm: async () => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true
            })

            Toast.fire({
              icon: 'success',
              title: self.$t("autosave.text")
            })
            console.log('loaded a save!')
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
            const saveNickname = await localforage.getItem("autosaveName")
            document.querySelector("#docName").textContent = (saveNickname == null || saveNickname == "" ? "Untitled autosave" : saveNickname)
          },
        })
      }

    }
    workspace.addChangeListener((event) => {
      if (DISABLED_EVENTS.includes(event.type)) return;
      handle(workspace);
    });
  }, 1000)
}

async function handle(workspace) {
  console.log('saved changes...')
  const content = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
  await localforage.setItem("save3", content);
  await localforage.setItem("autosaveName", document.querySelector("#docName").textContent)
}