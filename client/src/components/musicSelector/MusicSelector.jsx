import React, { useState, useEffect } from 'react'
import menu_img from '../../../resources/menu-icon.svg'
import {SIZES} from '../../util/size_config'

// maybe use this?
// https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

function MusicSelector(props) {
  /***
   * sizing
   */
  //props.width
  const menu_icon_block_width = 60
  const meta_block_width = props.width - menu_icon_block_width - SIZES.MARGIN_SMALL

  //props.setTabData
  const [menu_bool, setMenuBool] = useState(false) 
  const [active_music_index, setActiveMusicIndex] = useState(0)
  const [music_list, setMusicList] = useState(null)

  useEffect(() => {
  fetch('/api/tablist')
    .then((response) => response.json())
    .then((data) => {
      setMusicList(data)
    })
  }, []);

  let name = null
  let composer = null
  let list_items = null
  let menu = null

  if (music_list !== null) {
    name = music_list[active_music_index][0]
    composer = music_list[active_music_index][1]
    list_items = music_list.map((meta_arr, index)=>{
      return <div 
          onClick={(e)=>handleItemClick(e.currentTarget, meta_arr[2])} 
          key={index}
          index={index}
          style={{
            width: props.width,
            height: '50px',
            boxSizing: 'border-box',
            padding: '5px',
            marginBottom: '1px',
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
      width: props.width,
      top: SIZES.MS_HEIGHT + 5, 
      backdropFilter: 'blur(5px)',
      zIndex: '10'      
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
    getRequest(dir_path)
    setActiveMusicIndex(el.getAttribute('index'))
    setMenuBool(false)
  }

  let handleClick = () => {
    setMenuBool(!menu_bool)
  }
  return (
    <div style={{
      display: 'block',
      position: 'relative',
      width: props.width,
      height: SIZES.MS_HEIGHT
    }}>
      <div style={{
        display: 'inline-block',
        width: meta_block_width,
        height: SIZES.MS_HEIGHT,
        boxSizing: 'border-box',
        padding: '5px',
        marginRight: '1px',
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
          width: menu_icon_block_width,
          height: SIZES.MS_HEIGHT,
          boxSizing: 'border-box',
          padding: '5px',
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

export default MusicSelector
