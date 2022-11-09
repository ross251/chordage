import React, { Component, useState } from 'react'

function Chord(props) {
  let chord_notes=props.notes
  let svg_height=props.height;
  let svg_width=props.width;
  let x_offset = props.x_offset
  let y_offset = props.y_offset

  let circle_radius = (x_offset-1)/2

  let note_svgs = chord_notes.map((note_obj, index)=>{
    if (note_obj !== null) { // empty obj then no note
      let circle_x = (index+1)*x_offset
      let circle_y = ((note_obj['fret']+1)*y_offset) - (circle_radius + 3)
      return  <circle 
                cx={circle_x} 
                cy={circle_y} 
                r={circle_radius} 
                fill={note_obj['color']} 
                key={index}>
              </circle>
    }
  })

  return ( 
    <div id='chordwrap'
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

export default Chord
