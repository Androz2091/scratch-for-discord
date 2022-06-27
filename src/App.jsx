import './App.css';
import { useRef, useEffect } from 'react';
import toolbox from './toolbox';
import DarkTheme from "@blockly/theme-dark";
import './blocks/discord/base'
import Blockly from 'blockly'
function App() {
  const blocklyParent= useRef(null)
  useEffect(() => {
    const workspace = Blockly.inject(blocklyParent.current, {
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
    })
    
    return () => {
      blocklyParent.innerHtml = ""
    }
  }, [])
  return (
    <div ref={blocklyParent} className="h-screen w-full"></div>
  );
}
export default App;