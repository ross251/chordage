import React, { Component, useState } from 'react'

function Underlay(props) {
  let notes=props.notes
  let svg_height=props.height;
  let svg_width=props.width;
  let x_offset = props.x_offset
  let y_offset = props.y_offset

  let circle_radius = (x_offset-1)/2

  console.log(notes)
  let note_svgs = notes.map((note_obj, index)=>{
    console.log(note_obj['string'])
    let circle_x = (note_obj['string'])*x_offset
    let circle_y = ((note_obj['fret']+1)*y_offset) - (circle_radius + 3)
    return  <circle 
              cx={circle_x} 
              cy={circle_y} 
              r={circle_radius} 
              stroke={note_obj['color']} 
              fill='none'
              key={index}>
            </circle>
    }
  )

  return ( 
    <div id='underlaywrap'
      style={{position: 'absolute',
        top: '0',
        left: '0'
      }}
    > 
      <svg style={{
          height: svg_height,
          width: svg_width
      }}>
        {note_svgs}    
      </svg>
    </div>
  )
}

export default Underlay
