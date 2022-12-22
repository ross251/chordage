import React, { useState, useEffect } from 'react'
import arrow_img from '../../../resources/icons8-chevron-left-64.png' 
import { SIZES } from '../../util/size_config'

function InstanceController(props) {
  let full_width = props.full_width
  let [forwardBool, setForwardBool] = useState(false)
  let [reverseBool, setReverseBool] = useState(false)
  let active_instance = props.active_index + 1
  if (props.instance_count == 0) {
    active_instance = 0
  }
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

  let actual_ic_height = SIZES.IC_HEIGHT - SIZES.MARGIN_BIG

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

  let small_multiplier = 1/6
  let big_multiplier = 1/3
  return ( 
    <div id='instanceController' style={{
          width: full_width, 
          height: actual_ic_height,
          marginTop: SIZES.MARGIN_BIG,
          display: 'block',
          zIndex: '1'}}>
      <div onClick={reversePlay}
        style={{
          marginRight: '1px',
          width: full_width*small_multiplier, 
          height: actual_ic_height,
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
          width: full_width*small_multiplier, 
          height: actual_ic_height,
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
          width: full_width * big_multiplier - (4), //-right margin adjustment 
          height: actual_ic_height,
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
            transform: 'translate(-50%, -50%)'}}>{active_instance} / {props.instance_count}</span>
      </div>
      <div style={{
          marginRight: '1px',
          width: full_width * small_multiplier, 
          height: actual_ic_height,
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
          width: full_width * small_multiplier, 
          height: actual_ic_height,
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
