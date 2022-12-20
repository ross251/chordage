import React, { useState, useEffect } from 'react'
import arrow_img from '../../../resources/icons8-chevron-left-64.png' 

function InstanceController(props) {
  let full_width = props.full_width
  let [forwardBool, setForwardBool] = useState(false)
  let [reverseBool, setReverseBool] = useState(false)
  if (forwardBool && props.active_index + 1 >= props.instance_count) {
    setForwardBool(false)
  }
  if (reverseBool && props.active_index <= 0) {
    setReverseBool(false)
  }
  function forwardPlay(){
    setForwardBool(true)
  }
  function reversePlay(){
    setReverseBool(true)
  }
  function backOne() {
    if (props.active_index > 0 ) {
      props.setActiveIndex(props.active_index-1)
    }
  }
  function forwardOne() {
    if (props.active_index+1 < props.instance_count) {
      props.setActiveIndex(props.active_index+1)
    }
  }

  useEffect(() => {
    let interval 
    if (forwardBool) {
      interval = setInterval(() => {
        props.setActiveIndex(idx => idx + 1);
      }, 1000);
    } else if (reverseBool){
      interval = setInterval(() => {
        props.setActiveIndex(idx => idx - 1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [forwardBool, reverseBool]);

  return ( 
    <div id='instanceController' style={{
          width: full_width + 20, 
          height: '75px',
          margin: 0,
          display: 'block',
          zIndex: '1'}}>
      <div onClick={reversePlay}
        style={{
          marginRight: '1px',
          width: full_width*.15 - 1, 
          height: '75px',
          backgroundColor: '#212121', 
          display:'inline-block',
          float: 'left',
          position: 'relative'}}>
        <div style={{
            width: '25px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
          <img src={arrow_img}
              width='16px'
              height='16px'>    
          </img>
          <img src={arrow_img}
              width='16px'
              height='16px'
              style={{marginLeft:'-7px'}}>    
          </img>
        </div>
      </div>
      <div onClick={backOne}
        style={{
          marginRight: '1px',
          width: full_width*.15-1, 
          height: '75px',
          backgroundColor: '#212121', 
          display:'inline-block',
          float: 'left',
          position: 'relative'}}>
        <div style={{
            width: '16px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
          <img src={arrow_img}
              width='16px'
              height='16px'>    
          </img>
        </div>
      </div>
      <div style={{
          marginRight: '1px',
          width: full_width*(.40) - 1, 
          height: '75px',
          backgroundColor: '#212121', 
          display:'inline-block',
          float: 'left',
          position: 'relative'}}>
        <span style={{
            color:'#999999',
            fontSize: '20px', 
            fontWeight: 'bold',
            display:'block',
            fontFamily: 'Verdana, Geneva, sans-serif',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'}}>{props.active_index + 1} / {props.instance_count}</span>
      </div>
      <div style={{
          marginRight: '1px',
          width: full_width*(.15) - 1, 
          height: '75px',
          backgroundColor: '#212121', 
          display:'inline-block',
          float: 'left',
          position: 'relative'}}>
        <div onClick={forwardOne}
          style={{
            width: '16px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(180deg)'
        }}>
          <img src={arrow_img}
              width='16px'
              height='16px'>    
          </img>
        </div>
      </div>
      <div onClick={forwardPlay}
        style={{
          margin: 0,
          width: full_width*(.15), 
          height: '75px',
          backgroundColor: '#212121', 
          display:'inline-block',
          float: 'left',
          position: 'relative'}}>

        <div style={{
            width: '25px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(180deg)'
        }}>
          <img src={arrow_img}
              width='16px'
              height='16px'>    
          </img>
          <img src={arrow_img}
              width='16px'
              height='16px'
              style={{marginLeft:'-7px'}}>    
          </img>
        </div>
      </div>
    </div>
  )
}

export default InstanceController
