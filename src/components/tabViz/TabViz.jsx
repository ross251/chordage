import React, { Component, useState } from 'react'
import Board from './Board.jsx'
import Chord from './Chord.jsx'
import Underlay from './Underlay.jsx'
import Info from './Info.jsx'
import './TabViz.css'
import InstanceController from './InstanceController.jsx'
import TopBanner from './TopBanner.jsx'
function TabViz() {
  const [board_size, setBoardSize] = useState('SMALL');
  const [active_index, setActiveIndex] = useState(0);
  const [tab_data, setTabData] = useState(data)
  let svg_height;
  let svg_width;
  if(board_size === 'SMALL'){
    svg_height = 600;
    svg_width = 200;
  } else if (board_size === 'LARGE'){
    svg_height = 900;
    svg_width = 300;
  }
  let x_offset = svg_width / 7
  let y_offset = svg_height / 13
  
  let full_width = svg_width * 1.5 + 30
  
  let infos_refs = tab_data['infos_data']['info_refs']
  let infos_arr = tab_data['infos_data']['infos_data']
  let underlays_refs = tab_data['underlays_data']['underlay_refs']
  let underlays_arr = tab_data['underlays_data']['underlays_data']
  let chord_arr = tab_data['instance_data']['instance_data']
  
  let underlay_component = null
  if (underlays_refs[active_index] !== null) {
    //console.log(underlays_arr[underlays_refs[active_index]])
    underlay_component = <Underlay
    height={svg_height}
    width={svg_width}
    x_offset={x_offset}
    y_offset={y_offset}
    notes={underlays_arr[underlays_refs[active_index]]}
    />
  }
  
  // Move this calculation to the server
  let info_position_arr = chord_arr.map((chord_arr, index) => {
    let filtered_arr = chord_arr.filter(chord_obj => chord_obj !== null)
    return Math.floor(filtered_arr.reduce((fret_summer, chord_obj) => {
      return fret_summer + chord_obj.fret}, 0) / filtered_arr.length
      )})
      
      let infos_component = null
      if (infos_refs[active_index] !== null) {
        infos_component = <Info
        info = {infos_arr[infos_refs[active_index]]}
        info_fret = {info_position_arr[active_index]}
        y_offset={y_offset}
        />
      }
      
      let scroll_blocks = infos_refs.map(() => {
        return <div class='scrollItem'
        style={{
          width: svg_width,
          height: svg_height}}></div>
        })
        
        let handleScroll = () => {
          let el = document.getElementById('scrollSelector')
          let scrollOffset = el.scrollLeft;
          let itemWidth = el.offsetWidth;
          let i = 0;
          while ((i) * itemWidth <= scrollOffset - (itemWidth)) {
            i++;
          }
          if(i !== active_index) {
            setActiveIndex(i)//[null, null, 0, 0, null]
          }
        }
        
        return ( 
    <div style={{
      position: 'absolute',
      width: full_width + 50
    }}>
      <div>
        <TopBanner
          full_width = {full_width}
          setTabData = {setTabData}
        />
        <div id='tab-box' style={{
          width: svg_width, 
          height: svg_height,
          zIndex: '1'}}>
          <Board 
            height={svg_height}
            width={svg_width}
            x_offset={x_offset}
            y_offset={y_offset}/>
         
          {underlay_component}
          <Chord
            height={svg_height}
            width={svg_width}
            x_offset={x_offset}
            y_offset={y_offset}
          notes={chord_arr[active_index]}/>
          <div id='scrollSelector'
              onScroll={handleScroll}
              style={{
                width: svg_width,
                height:  svg_height}}>
            {scroll_blocks}
          </div>
        </div>
        <div id='infoBannerBox' 
            style={{height: svg_height,
              width: svg_width / 2,
              padding: '10px',
              zIndex: '1'}}>
          {infos_component}
        </div>
        <InstanceController 
          full_width={full_width} 
          active_index={active_index}
          instance_count={chord_arr.length}
          setActiveIndex={setActiveIndex}/>
      </div>
    </div>
  )
}

export default TabViz

