import React from 'react'
import { useEffect, useRef } from 'react'
import Blockly from 'blockly'
import toolbox from './toolbox'

//stop i have auto import
const App = () => {

    let blocklyDiv = useRef(null)
    useEffect(() => { //i dont know react i write as i know
        Blockly.inject(blocklyDiv.current, {toolbox: toolbox})  
    })

  return (
    <div className="h-screen w-screen" ref={blocklyDiv}></div>
  )
}

export default App