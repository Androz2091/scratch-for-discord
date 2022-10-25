import './App.css'
import { useEffect, useRef, useState } from 'react'
import 'prismjs/themes/prism-tomorrow.css'
import toolbox from './toolbox'
import DarkTheme from "@blockly/theme-dark"
import * as Blockly from "blockly"
import * as Prism from 'prismjs'
import javascript from 'blockly/javascript'
import Swal from 'sweetalert2'
import ModernTheme from "@blockly/theme-modern"

// React Icons
import { FaFolder, FaPencilAlt, FaToolbox } from 'react-icons/fa';

//load Blocks
import './blocks/discord/base'
import './blocks/database'

function App() {
  let workspace = useRef()
  const [dark, setDark] = useState(false)
  const blocklyParent = useRef(undefined)
  useEffect(() => {
    workspace.current = Blockly.inject(blocklyParent.current, {
      toolbox: toolbox,
      theme: dark ? DarkTheme : ModernTheme,
      renderer: 'zelos',
      grid: {
        spacing: 20,
        length: 3,
        colour: "#ccc",
        snap: true
      },
      zoom: {
        controls: true,
        startScale: 0.9,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
      },
      readOnly: false,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true
      },
      CSS: false,
    })
    window.blocklyWorkspace = workspace.current
  }, [workspace, dark])
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-1000 p-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6 my-auto">
            <img src="https://images-ext-1.discordapp.net/external/qT4OReCGZ7tLyu7EOp0ZeM1J755R8yOV5vl_IFKd66E/%3Fsize%3D4096/https/cdn.discordapp.com/icons/932651844344373278/ef5d4de4c598bda58c6edc09e9478b2d.png?width=492&height=492" alt="scratch" className="fill-current h-10 w-10 mr-2"/>
            <span className="font-semibold text-xl tracking-tight logo">Scratch For Discord</span>
        </div>
        <div className="block lg:hidden">
        </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                    <FaFolder title="File"/> File
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                    <FaPencilAlt title="Edit"/> Edit
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white">
                    <FaToolbox title="Toolbox"/> Toolbox
                </a>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all ml-4" onClick={() => {
                  const code = `(async () => {
                    const Discord = require("discord.js")
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
                    const s4d = {
                        Discord,
                        database: new Database(\`\${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json\`),
                        joiningMember: null,
                        reply: null,
                        tokenInvalid: false,
                        tokenError: null,
                        checkMessageExists() {
                          if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                          if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    }
                    s4d.client = new s4d.Discord.Client({
                      intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                      partials: ["REACTION"]
                    })
                    ${javascript.workspaceToCode(workspace.current)}
                    return s4d
                  })()
                  `
                  Swal.fire({
                    title: "<strong class=\"text-white\">JavaScript Code</strong>",
                    html: `<pre data-example-id="customHtml" data-codepen-css-external="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" class="code">
                      <code class="lang-javascript hljs language-javascript">
                        ${Prism.highlight(code, Prism.languages.javascript, 'javascript')}
                      </code>
                    </pre>`,
                    confirmButtonText: "Copy To Clipboard",
                    denyButtonText: "Close"
                  }).then(res => {
                    if(res.isConfirmed) {
                      navigator.clipboard.writeText(code).then(() => {
                        Swal.fire('Copied To Clipboard', undefined, 'success')
                      })
                    }
                  })
                }}>Generate Code</button>
                <button onClick={() => {
                  setDark(!dark)
                  console.log(dark)
                }}>Dark</button>
            </div>
        </div>
      </nav>
      <div ref={blocklyParent} className="h-screen w-full"></div>
    </>
  )
}
export default App