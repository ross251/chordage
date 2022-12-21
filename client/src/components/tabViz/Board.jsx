import React from 'react'

function Board(props) {
  return ( 
    <div id='boardWrap'> 
      <svg style={{
          height: props.height,
          width: props.width,
          position: 'absolute',
          top: 0,
          left: 0,

        }}>
          {
            // frets
          }
          <line y1={props.y_offset} 
            y2={props.y_offset}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'tan', strokeWidth: '4'}}>
          </line>
          <line y1={props.y_offset*2} 
            y2={props.y_offset*2}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={props.y_offset*3} 
            y2={props.y_offset*3}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={props.y_offset*4} 
            y2={props.y_offset*4}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={props.y_offset*5} 
            y2={props.y_offset*5}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={props.y_offset*6} 
            y2={props.y_offset*6}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={props.y_offset*7} 
            y2={props.y_offset*7}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={props.y_offset*8} 
            y2={props.y_offset*8}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={props.y_offset*9} 
            y2={props.y_offset*9}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={props.y_offset*10} 
            y2={props.y_offset*10}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={props.y_offset*11} 
            y2={props.y_offset*11}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          <line y1={props.y_offset*12} 
            y2={props.y_offset*12}
            x1='0%' 
            x2='100%' 
            style={{stroke: 'gold', width: '10'}}>
          </line>
          {
            // Strings
          }
          <line y1='0%' 
            y2='100%' 
            x1={props.x_offset} 
            x2={props.x_offset} 
            style={{stroke: 'white', strokeWidth: '3'}}>
          </line>
          <line y1='0%' 
            y2='100%' 
            x1={props.x_offset*2} 
            x2={props.x_offset*2}  
            style={{stroke: 'white', strokeWidth: '2'}}>
          </line>
          <line y1='0%' 
            y2='100%' 
            x1={props.x_offset*3} 
            x2={props.x_offset*3}  
            style={{stroke: 'white', strokeWidth: '2'}}>
          </line>
          <line y1='0%' 
            y2='100%' 
            x1={props.x_offset*4} 
            x2={props.x_offset*4}  
            style={{stroke: 'white', strokeWidth: '2'}}>
          </line> 
          <line y1='0%' 
            y2='100%' 
            x1={props.x_offset*5} 
            x2={props.x_offset*5}  
            style={{stroke: 'white', strokeWidth: '2'}}>
          </line> 
          <line y1='0%' 
            y2='100%' 
            x1={props.x_offset*6} 
            x2={props.x_offset*6}  
            style={{stroke: 'white', strokeWidth: '1'}}>
          </line>
          {
            // decorators
          }
          <line y1={(props.y_offset*3)+(props.y_offset/2)} 
            y2={(props.y_offset*3)+(props.y_offset/2)}
            x1='0' 
            x2='5' 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
          <line y1={(props.y_offset*3)+(props.y_offset/2)} 
            y2={(props.y_offset*3)+(props.y_offset/2)}
            x1={props.width} 
            x2={props.width - 5} 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>

          <line y1={(props.y_offset*5)+(props.y_offset/2)} 
            y2={(props.y_offset*5)+(props.y_offset/2)}
            x1='0' 
            x2='5' 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
          <line y1={(props.y_offset*5)+(props.y_offset/2)} 
            y2={(props.y_offset*5)+(props.y_offset/2)}
            x1={props.width} 
            x2={props.width - 5} 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>

          <line y1={(props.y_offset*7)+(props.y_offset/2)} 
            y2={(props.y_offset*7)+(props.y_offset/2)}
            x1='0' 
            x2='5' 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
          <line y1={(props.y_offset*7)+(props.y_offset/2)} 
            y2={(props.y_offset*7)+(props.y_offset/2)}
            x1={props.width} 
            x2={props.width - 5} 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>

          <line y1={(props.y_offset*9)+(props.y_offset/2)} 
            y2={(props.y_offset*9)+(props.y_offset/2)}
            x1='0' 
            x2='5' 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
          <line y1={(props.y_offset*9)+(props.y_offset/2)} 
            y2={(props.y_offset*9)+(props.y_offset/2)}
            x1={props.width} 
            x2={props.width - 5} 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>

          <line y1={(props.y_offset*12)+(props.y_offset/2)} 
            y2={(props.y_offset*12)+(props.y_offset/2)}
            x1='0' 
            x2='5' 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
          <line y1={(props.y_offset*12)+(props.y_offset/2)} 
            y2={(props.y_offset*12)+(props.y_offset/2)}
            x1={props.width} 
            x2={props.width - 5} 
            style={{stroke: 'white', strokeWidth: '5'}}>
          </line>
      </svg>
    </div>
  )
}

export default Board
