import React, { useState, useEffect } from 'react'
import menu_img from '../../../resources/menu-icon.svg'

// maybe use this?
// https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

function TopBanner(props) {
  const [menu_bool, setMenuBool] = useState(false)
  let menu = null

  function getRequest(dir_path) {
    fetch('/tabdata?dir='+dir_path)
      .then((response) => response.json())
      .then((data) => {
        props.setTabData(data)
        console.log(data)
      })
  }

  if (menu_bool) {
    menu = <div style={{
      position: 'absolute',
      top: '70px', 
      left: '0',
      right: '0',
      bottom: '0',
      backdropFilter: 'blur(5px)',
      zIndex: '10',
      border: '1px solid red'      
    }}>
      <h1 onClick={() => {getRequest('/home/ross/dev/projects/chordage/data/tab_visualizations/tester1')}}
      >Tester 1</h1>
      <h2 onClick={() => {getRequest('/home/ross/dev/projects/chordage/data/tab_visualizations/tester2')}}
      >Tester 2</h2>
    </div>
  }

  let handleClick = () => {
    setMenuBool(!menu_bool)
  }
  return (
    <div style={{
      display: 'block',
      margin: '5px',
      width: props.full_width,
    }}>
      <div style={{
        display: 'inline-block',
        width: props.full_width - 84,
        height: '50px',
        padding: '5px',
        margin: '1px',
        backgroundColor: '#212121',
        float: 'left'
      }}>
        <span
            style={{
              margin: '0',
              padding: '0',
              fontSize: '25px', 
              display:'block',
              fontFamily: 'Verdana, Geneva, sans-serif',
              color: 'white'}}>
          ii V I Progression 1
        </span>
        <span
            style={{ 
              margin: '0',
              padding: '0',
              fontSize: '15px',
              display:'block',
              fontFamily: 'Verdana, Geneva, sans-serif',
              color: '#999999'}}>
          Ludvig Von Bheethoven
            </span>
      </div>
      <div onClick={handleClick} 
        style={{
          display: 'inline-block',
          width: '60px',
          height: '50px',
          padding: '5px',
          margin: '1px',
          position: 'relative',
          backgroundColor: '#212121'
      }}>
        <img src={menu_img}
          width='23px'
          height='23px'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>    
        </img>
      </div>
      {menu}
    </div>
    /*<div id='topBanner'
        style={{
          width: props.full_width,
          height: '70px', 
          margin: '5px'}}>
      <div style={{
          width: props.full_width -64-20,
          backgroundColor: '#212121',
          margin: '1px', 
          padding: '10px',
          display:'inline-block',
          height: '50px'
          }}>
      
        <span
            style={{
              margin: '0',
              padding: '0',
              fontSize: '25px', 
              display:'block',
              fontFamily: 'Verdana, Geneva, sans-serif',
              color: 'white'}}>
          ii V I Progression 1
        </span>
        <span
            style={{ 
              margin: '0',
              padding: '0',
              fontSize: '15px',
              display:'block',
              fontFamily: 'Verdana, Geneva, sans-serif',
              color: '#999999'}}>
          Ludvig Von Bheethoven
            </span>
      </div>
      <div style={{display:'inline-block',
          position: 'relative',
          backgroundColor: '#212121',
          width: '40px',
          height: '50px',
          padding: '10px',
          margin: '1px',}}>
        <img src={menu_img}
          width='23px'
          height='23px'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>    
        </img>
      </div>
    </div>*/
  )
}

export default TopBanner
