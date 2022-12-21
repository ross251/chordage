import React, { Component, useState } from 'react'
import Board from './Board.jsx'
import Chord from './Chord.jsx'
import Underlay from './Underlay.jsx'
import Info from './Info.jsx'
import InstanceController from './InstanceController.jsx'
import { SIZES } from '../../util/size_config.js'

function TabViz(props) {

  
  const active_index = props.active_index
  const setActiveIndex = props.setActiveIndex
  const tab_data = props.tab_data
  //setTabData = props.setTabData

  let actual_tv_height = props.height - SIZES.MARGIN_BIG
  let svg_height = actual_tv_height - SIZES.IC_HEIGHT
  let infos_height = svg_height 
  let svg_width = .66 * props.width - SIZES.MARGIN_BIG
  let infos_width = .34 * props.width

  let x_offset = svg_width / 7
  let y_offset = svg_height / 13

  let chord_component = null
  let underlay_component = null
  let infos_component = null
  let scroll_blocks = null
  let instance_count = 0
  if (tab_data !== null) {
    chord_component = <Chord
        height={svg_height}
        width={svg_width}
        x_offset={x_offset}
        y_offset={y_offset}
        notes={tab_data['instance_data']['instance_data'][active_index]}/>
    
    const underlay_index = tab_data['underlays_data']['underlay_refs'][active_index]
    if (underlay_index !== null) {
      underlay_component = <Underlay
          height={svg_height}
          width={svg_width}
          x_offset={x_offset}
          y_offset={y_offset}
          notes={tab_data['underlays_data']['underlays_data'][underlay_index]}
      />
    }

    // Move this calculation to the server
    let info_position_arr = tab_data['instance_data']['instance_data'].map((chord_arr, index) => {
      let filtered_arr = chord_arr.filter(chord_obj => chord_obj !== null)
      return Math.floor(filtered_arr.reduce((fret_summer, chord_obj) => {
        return fret_summer + chord_obj.fret}, 0) / filtered_arr.length
    )})

    const info_index = tab_data['infos_data']['info_refs'][active_index]
    if (info_index !== null) {
      infos_component = <Info
      info = {tab_data['infos_data']['infos_data'][info_index]}
      info_fret = {info_position_arr[active_index]}
      y_offset={y_offset}
      />
    }

    scroll_blocks = tab_data['infos_data']['info_refs'].map(() => {
      return <div class='scrollItem'
      style={{
        width: svg_width,
        height: svg_height}}></div>
      })
    instance_count = tab_data['instance_data']['instance_data'].length 
  }    
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
        let actual_ic_height = SIZES.IC_HEIGHT - SIZES.MARGIN_BIG
        return ( 
    <div style={{
        position: 'relative',
        fontSize: 0, // clears extra margin for inline children 
        width: props.width,
        height: actual_tv_height,
        marginTop: SIZES.MARGIN_BIG}}>

      <div id='tab-box' style={{
          width: svg_width, 
          height: svg_height,
          marginRight: SIZES.MARGIN_BIG,
          zIndex: '1'}}>
        <Board 
            height={svg_height}
            width={svg_width}
            x_offset={x_offset}
            y_offset={y_offset}/>
         
          {underlay_component}
          {chord_component}
          <div id='scrollSelector'
              onScroll={handleScroll}
              style={{
                width: svg_width,
                height:  svg_height}}>
            {scroll_blocks}
          </div>
        </div>


        <div id='infoBannerBox' 
            style={{
              height: infos_height,
              width: infos_width,
              zIndex: '1'}}>
          {infos_component}
        </div>
        <InstanceController 
            full_width={props.width} 
            active_index={active_index}
            instance_count={instance_count}
            setActiveIndex={setActiveIndex}/>
    </div>
  )
}

export default TabViz

