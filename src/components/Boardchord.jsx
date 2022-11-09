import React, { Component, useState } from 'react'
import Board from './Board.jsx'
import Chord from './Chord.jsx'
import Underlay from './Underlay.jsx'

function Boardchord() {
  const [board_size, setBoardSize] = useState('SMALL');
  const [active_index, setActiveIndex] = useState(0);
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

  let underlays_refs = data['underlays_data']['underlay_refs']//[null, null, 0, 0, null]
  let underlays_arr = data['underlays_data']['underlays_data']
  //console.log(underlays_refs)
  //console.log(underlays_arr) 
  /*[[
  
      {
        string: 1,
        fret: 5,
        color: '#F0000F'
      },
      {
        string: 1,
        fret: 7,
        color: '#FFFF00'
      },
      {
        string: 2,
        fret: 4,
        color: '#FF00F0'
      },
      {
        string: 2,
        fret: 5,
        color: '#0F0F0F'
      },
      {
        string: 2,
        fret: 7,
        color: '#0000FF'
      },
      {
        string: 3,
        fret: 4,
        color: '#FFFF00'
      },
      {
        string: 3,
        fret: 6,
        color: '#FFF0F0'
      },
      {
        string: 3,
        fret: 7,
        color: '#F0FF00'
      },
      {
        string: 4,
        fret: 4,
        color: '#FF0FF0'
      },
      {
        string: 4,
        fret: 6,
        color: '#FF00F0'
      },
      {
        string: 4,
        fret: 7,
        color: '#FF000F'
      },
      {
        string: 5,
        fret: 5,
        color: '#FF00FF'
      },
      {
        string: 5,
        fret: 7,
        color: '#FF0F00'
      },
      {
        string: 6,
        fret: 4,
        color: '#F0F000'
      },
      {
        string: 6,
        fret: 5,
        color: '#FF00'
      }
    ]
  ]*/


  let chord_arr = data['instance_data']['instance_data']/*[[
    {
      fret: 9,
      color: '#FF0000',
      opacity: '100%'
    },
    {},
    {
      fret: 9,
      color: '#00FF00',
      opacity: '100%'  
    },
    {
      fret: 9,
      color: '#0000FF',
      opacity: '100%'  
    },
    {
      fret: 9,
      color: '#FF00FF',
      opacity: '100%'  
    },
    {}
  ],
// ############################################3
  [
    {
      fret: 5,
      color: '#FF0000',
      opacity: '100%'
    },
    {},
    {
      fret: 6,
      color: '#00FF00',
      opacity: '100%'  
    },
    {
      fret: 6,
      color: '#0000FF',
      opacity: '100%'  
    },
    {
      fret: 5,
      color: '#FF00FF',
      opacity: '100%'  
    },
    {}
  ],
  //#######################################################
  [
    {
      fret: 7,
      color: '#FF0000',
      opacity: '100%'
    },
    {},
    {
      fret: 7,
      color: '#00FF00',
      opacity: '100%'  
    },
    {
      fret: 7,
      color: '#0000FF',
      opacity: '100%'  
    },
    {
      fret: 7,
      color: '#FF00FF',
      opacity: '100%'  
    },
    {}
  ],
  //########################################3
  [
    {},
    {
      fret: 7,
      color: '#FF0000',
      opacity: '100%'
    },
    {
      fret: 6,
      color: '#00FF00',
      opacity: '100%'  
    },
    {
      fret: 7,
      color: '#0000FF',
      opacity: '100%'  
    },
    {
      fret: 5,
      color: '#FF00FF',
      opacity: '100%'  
    },
    {}
  ],
  //################################################3
  [
    {
      fret: 5,
      color: '#FF0000',
      opacity: '100%'
    },
    {},
    {
      fret: 6,
      color: '#00FF00',
      opacity: '100%'  
    },
    {
      fret: 6,
      color: '#0000FF',
      opacity: '100%'  
    },
    {
      fret: 5,
      color: '#FF00FF',
      opacity: '100%'  
    },
    {}
  ]
]*/

  let li_style = {
    width: svg_width,
    height: svg_height,
    //border:'2px yellow solid',
    display: 'inline-block',
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    flex: 'none'
  }
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

  let handleScroll = () => {
    let el = document.getElementById('scrollselector')
    let scrollOffset = el.scrollLeft;
    let itemWidth = el.offsetWidth;
    let i = 0;
    while ((i) * itemWidth <= scrollOffset - (itemWidth)) {
        i++;
    }
    if(i !== active_index) {
      setActiveIndex(i)
    }
  }
  return ( 
    <div>
    <div style={{padding: '10px',
      width: svg_width,
      backgroundColor: '#212121',
      display:'inline-block'}}
      >
    <div id='boardchordwrap'
      style={{position: 'relative',
        height: svg_height,
        width: svg_width,
      }}
    > 
      <Board 
        height={svg_height}
        width={svg_width}
        x_offset={x_offset}
        y_offset={y_offset}
      />
      {underlay_component}
      <Chord
        height={svg_height}
        width={svg_width}
        x_offset={x_offset}
        y_offset={y_offset}
        notes={chord_arr[active_index]}
      />
      

      <div id='scrollselector'
        onScroll={handleScroll}
        style={{position: 'absolute',
          top: '0',
          left: '0',
          width: svg_width,
          height:  svg_height,
          display: 'flex',
          overflowX: 'scroll',
          overflowY: 'hidden',
          boxSizing: 'border-box',
          margin: '0',
          padding: '0'
        }}>
          <div style={li_style}></div>
          <div style={li_style}></div>
          <div style={li_style}></div>
          <div style={li_style}></div>
          <div style={li_style}></div>
        </div>
      </div>
      </div>
      <div style={{display: 'inline-block',
        height: svg_height,
        width: svg_width / 2,
        backgroundColor: '#212121',
        padding: '10px'
    }}></div>
      <div style={{display:'block'}}>
        <span style={{color:'white'}}>{active_index+1} / {chord_arr.length}</span>
      </div>
      </div>
  )
}

export default Boardchord

