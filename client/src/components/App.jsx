import React, { useState } from 'react'
import TabViz from './tabViz/TabViz.jsx'
import MusicSelector from './musicSelector/MusicSelector.jsx'

let calcWrapWidth = () => {
  const MIN_WIDTH = 300
  const MAX_WIDTH = 500
  let width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
  
  if (width < MIN_WIDTH) {
    return MIN_WIDTH
  } else if (width > MAX_WIDTH) {
    return MAX_WIDTH
  }
  return width
}

let calcWrapHeight = () => {
  const MIN_HEIGHT = 600
  const MAX_HEIGHT = 1000
  let height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight

  if (height < MIN_HEIGHT) {
    return MIN_HEIGHT
  } else if (height > MAX_HEIGHT) {
    return MAX_HEIGHT
  }
  return height
}

function App() {
  /***
   * sizing
   *  */ 
  const [wrap_width, setWrapWidth] = useState(calcWrapWidth())
  const [wrap_height, setWrapHeight] = useState(calcWrapHeight())
  window.onresize = () => {
    setWrapWidth(calcWrapWidth())
    setWrapHeight(calcWrapHeight())
  }
  const wrap_margin = 5 
  const actual_wrap_width = wrap_width - (wrap_margin*2)
  const actual_wrap_height = wrap_height - (wrap_margin*2)

  /***
   * data control
   */
  const [active_index, setActiveIndex] = useState(0);
  const [tab_data, setTabData] = useState(null)

  return ( 
    <div id='centerer'
        style={{
          width: wrap_width,
          margin: 'auto'}}>
      <div id='appwrap'
          style={{
            width: actual_wrap_width,
            height: actual_wrap_height,
            margin: wrap_margin,
            backgroundColor: 'cyan'}}>
        <MusicSelector
            width = {actual_wrap_width}
            setTabData = {setTabData}
        />
        <TabViz
          width={actual_wrap_width}
          height={actual_wrap_height}
          active_index={active_index}
          setActiveIndex={setActiveIndex}
          tab_data={tab_data}
        />
      </div>
    </div>
  ) 
}
export default App
