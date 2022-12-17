import React, { Component, useState } from 'react'

function Underlay(props) {
  let circle_radius = (props.x_offset-1)/2

  let note_svgs = props.notes.map((note_obj, index)=>{
    let circle_x = (note_obj['string'])*props.x_offset
    let circle_y = ((note_obj['fret']+1)*props.y_offset) - (circle_radius + 3)
    return  <circle 
              cx={circle_x} 
              cy={circle_y} 
              r={circle_radius} 
              stroke={note_obj['color']} 
              fill='none'
              key={index}>
            </circle>
  })

  return ( 
    <div id='underlayWrap'>
      <svg style={{
          height: props.height,
          width: props.width}}>
        {note_svgs}    
      </svg>
    </div>
  )
}

export default Underlay
