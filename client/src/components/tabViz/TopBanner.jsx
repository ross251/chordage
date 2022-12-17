import React, { useState, useEffect } from 'react'
import menu_img from '../../../resources/menu-icon.svg'

// maybe use this?
// https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

function TopBanner(props) {
  const [menu_bool, setMenuBool] = useState(false)
  const [active_tab_index, setActiveTabIndex] = useState(0)
  const [tab_list, setTabList] = useState(null)
  
  useEffect(() => {
    fetch('/api/tablist')
      .then((response) => response.json())
      .then((data) => {
        setTabList(data)
      })
  }, []);

  let name = null
  let composer = null
  let list_items = null
  let menu = null

  if (tab_list !== null) {
    name = tab_list[active_tab_index][0]
    composer = tab_list[active_tab_index][1]
    list_items = tab_list.map((meta_arr, index)=>{
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
      {list_items}
    </div>
  }
  function getRequest(dir_path) {
    fetch('/api/tabdata?dir='+dir_path)
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
