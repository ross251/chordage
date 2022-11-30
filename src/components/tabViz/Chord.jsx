import React, { Component, useState } from 'react'

function Chord(props) {
  let circle_radius = (props.x_offset-1)/2
  let note_svgs = props.notes.map((note_obj, index)=>{
    if (note_obj !== null) { // empty obj then no note
      let circle_x = (index+1)*props.x_offset
      let circle_y = ((note_obj['fret']+1)*props.y_offset) - (circle_radius + 3)
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
    <div id='chordWrap'> 
      <svg style={{
          height: props.height,
          width: props.width}}>
        {note_svgs}    
      </svg>
    </div>
  )
}

export default Chord
