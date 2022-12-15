import React, { useState, useEffect } from 'react'
import menu_img from '../../../resources/menu-icon.svg'

// maybe use this?
// https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

function TopBanner(props) {
  const [menu_bool, setMenuBool] = useState(false)
  const [active_tab_index, setActiveTabIndex] = useState(0)
  const name = tab_list[active_tab_index][0]
  const composer = tab_list[active_tab_index][1]
  let menu = null

  function getRequest(dir_path) {
    fetch('/tabdata?dir='+dir_path)
      .then((response) => response.json())
      .then((data) => {
        props.setTabData(data)
        console.log(data)
      })
  }
  function handleItemClick(el, dir_path) {
    console.log(dir_path)
    getRequest(dir_path)
    setActiveTabIndex(el.getAttribute('index'))
    setMenuBool(false)
  }


  if (menu_bool) {
    const list_items = tab_list.map((meta_arr, index)=>{
      return <div 
          onClick={(e)=>handleItemClick(e.currentTarget, meta_arr[2])} 
          key={index}
          index={index}
          style={{
            width: props.full_width-2,
            height: '50px',
            padding: '5px',
            margin: '1px',
            backgroundColor: '#212121',
            color: 'white'
      }}>
        <span style={{display: 'block'}}>{meta_arr[0]}</span>
        <span style={{display: 'block'}}>{meta_arr[1]}</span>
      </div>
    })
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
      {list_items}
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
          {name}
        </span>
        <span
            style={{ 
              margin: '0',
              padding: '0',
              fontSize: '15px',
              display:'block',
              fontFamily: 'Verdana, Geneva, sans-serif',
              color: '#999999'}}>
          {composer}
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
  )
}

export default TopBanner
