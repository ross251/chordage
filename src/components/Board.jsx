import React, { Component, useState } from 'react'

function Board() {
  const [board_size, setBoardSize] = useState('SMALL');
  let svg_height;
  let svg_width;
  if(board_size === 'SMALL'){
    svg_height = 600;
    svg_width = 200;
  } else if (board_size === 'LARGE'){
    svg_height = 900;
    svg_width = 300;
  }
  let svg_height_str = svg_height + 'px'
  let svg_width_str = svg_width + 'px'

  let x_offset = svg_width / 7
  let y_offset = svg_height / 13


  return ( 
    <div id='boardwrap'> 
      <svg style={{backgroundColor: '#101010',
          height: svg_height_str,
          width: svg_width_str
        }}>
          {
            // frets
          }
          <line y1={y_offset} 
            y2={y_offset}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'tan', strokeWidth: '4'}}>
          </line>
          <line y1={y_offset*2} 
            y2={y_offset*2}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={y_offset*3} 
            y2={y_offset*3}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={y_offset*4} 
            y2={y_offset*4}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={y_offset*5} 
            y2={y_offset*5}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={y_offset*6} 
            y2={y_offset*6}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={y_offset*7} 
            y2={y_offset*7}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={y_offset*8} 
            y2={y_offset*8}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={y_offset*9} 
            y2={y_offset*9}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={y_offset*10} 
            y2={y_offset*10}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={y_offset*11} 
            y2={y_offset*11}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={y_offset*12} 
            y2={y_offset*12}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          {
            // Strings
          }
          <line y1='0%' 
            y2='100%' 
            x1={x_offset} 
            x2={x_offset} 
            style={{stroke: 'white', strokeWidth: '3'}}>
          </line>
          <line y1='0%' 
            y2='100%' 
            x1={x_offset*2} 
            x2={x_offset*2}  
            style={{stroke: 'white', strokeWidth: '2'}}>
          </line>
          <line y1='0%' 
            y2='100%' 
            x1={x_offset*3} 
            x2={x_offset*3}  
            style={{stroke: 'white', strokeWidth: '2'}}>
          </line>
          <line y1='0%' 
            y2='100%' 
            x1={x_offset*4} 
            x2={x_offset*4}  
            style={{stroke: 'white', strokeWidth: '2'}}>
          </line> 
          <line y1='0%' 
            y2='100%' 
            x1={x_offset*5} 
            x2={x_offset*5}  
            style={{stroke: 'white', strokeWidth: '2'}}>
          </line> 
          <line y1='0%' 
            y2='100%' 
            x1={x_offset*6} 
            x2={x_offset*6}  
            style={{stroke: 'white', strokeWidth: '1'}}>
          </line>
          {
            // decorators
          }
          <line y1={(y_offset*3)+(y_offset/2)} 
            y2={(y_offset*3)+(y_offset/2)}
            x1='0' 
            x2='5' 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
          <line y1={(y_offset*3)+(y_offset/2)} 
            y2={(y_offset*3)+(y_offset/2)}
            x1={svg_width} 
            x2={svg_width - 5} 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>

          <line y1={(y_offset*5)+(y_offset/2)} 
            y2={(y_offset*5)+(y_offset/2)}
            x1='0' 
            x2='5' 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
          <line y1={(y_offset*5)+(y_offset/2)} 
            y2={(y_offset*5)+(y_offset/2)}
            x1={svg_width} 
            x2={svg_width - 5} 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>

          <line y1={(y_offset*7)+(y_offset/2)} 
            y2={(y_offset*7)+(y_offset/2)}
            x1='0' 
            x2='5' 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
          <line y1={(y_offset*7)+(y_offset/2)} 
            y2={(y_offset*7)+(y_offset/2)}
            x1={svg_width} 
            x2={svg_width - 5} 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>

          <line y1={(y_offset*9)+(y_offset/2)} 
            y2={(y_offset*9)+(y_offset/2)}
            x1='0' 
            x2='5' 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
          <line y1={(y_offset*9)+(y_offset/2)} 
            y2={(y_offset*9)+(y_offset/2)}
            x1={svg_width} 
            x2={svg_width - 5} 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>

          <line y1={(y_offset*12)+(y_offset/2)} 
            y2={(y_offset*12)+(y_offset/2)}
            x1='0' 
            x2='5' 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
          <line y1={(y_offset*12)+(y_offset/2)} 
            y2={(y_offset*12)+(y_offset/2)}
            x1={svg_width} 
            x2={svg_width - 5} 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
      </svg>
    </div>
  )
}

export default Board
