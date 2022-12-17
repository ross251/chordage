import React, { Component, useState } from 'react'

function Info(props) {
  let top_offset = Math.floor((props.info_fret + 1) * props.y_offset)
  let top_offset_str = top_offset + 'px'  

  let base_span 
  if (props.info['base'] !== null) {
    base_span = <span style={{
        fontSize: '15px',
        display: 'inline-block',
        height: '15px',
        marginBottom: '-10px'
        }}>
      {props.info['base'] + '\\'}
    </span>
  }

  
  let root_str = props.info['root']
  let root_modifier_str
  if (root_str.length > 1) {
    root_modifier_str = root_str.slice(1)
    root_str = root_str.slice(0,1)
  }
  let root_span = <span style={{
        fontSize: '35px',
        height: '35px',
        display: 'inline-block',
        }} >
      {root_str}
    </span>
  let root_modifier_span = <span style={{
          fontSize: '20px',
          height: '20px',
          display: 'inline-block',
          width: '10px',
          marginLeft: '-2px',
          marginRight: '25px',
          float: 'left'
        }} >
      {root_modifier_str}
    </span>

let triad_span = <span style={{
        fontSize: '20px',
        height: '15px',
        display: 'inline-block',
        marginTop: '-5px', 
        float: 'left',
        clear: 'left'}} >
      {props.info['triad']}
    </span>

  let extension_spans
  if (props.info['extensions'] !== null) {
    extension_spans = props.info['extensions'].map((ext, index)=>{
      return <span style={{
            fontSize: '15px',
            display: 'inline-block',
            float: 'left'
            }} >
          {ext}
        </span>
    })
  }
  return ( 
    <div id='infowrap'
      style={{position: 'absolute',
          color: 'white',
          top: top_offset_str,
          left: '50%',
          transform: 'translate(-50%, 0)',
          height: '50px',
          width: '100%',
          display: 'flex',
          overflowX: 'scroll',
          overflowY: 'visible'
      }}
    > 
    
      <div style={{display:'inline-block', flex: 'none'}}>
        {base_span}
        {root_span}
      </div>
      <div style={{display:'inline-block', flex: 'none'}}>
        {root_modifier_span}
        {extension_spans}
        {triad_span}
      </div>
    </div>

  )
}

export default Info
