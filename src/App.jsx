import './App.css';
import { useCallback } from 'react';
import toolbox from './toolbox';
import DarkTheme from "@blockly/theme-dark";
import './blocks/discord/base'
import Blockly from 'blockly/core'
import Navbar from './components/Navbar'

let workspace
function App() {
  const blocklyParent = useCallback((e) => {
    const blocklyDiv = document.createElement('div')
    blocklyDiv.classList.add('h-full')
    blocklyDiv.classList.add('w-full')
    e.append(blocklyDiv)
    workspace = Blockly.inject(blocklyDiv, {
      toolbox: toolbox,
      theme: DarkTheme,
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
      CSS: false
    })
  }, [])
  return (
    <>
      <Navbar />
      <div ref={blocklyParent} className="h-screen w-full"></div>
    </>
  )
}
export default App;