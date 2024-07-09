import SettingsIcon from '@mui/icons-material/Settings';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function SidePanel(props) {
  
  const [showSetting, setShowSetting] = useState(false)
  const [isShowingSetting, setIsShowingSetting] = useState(false)

  function handleTime() {
    props.setShowTime(p => !p)
    localStorage.setItem("timeSettingKey", JSON.stringify(!props.showTime));
  }
  function handleContactDev() {
    props.setShowContactDev(p => !p)
    localStorage.setItem("contactSettingKey", JSON.stringify(!props.showContactDev));
  }
  function handleSidePanel() {
    props.setShowSidePanel(p => !p)
    localStorage.setItem("panelSettingKey", JSON.stringify(!props.showSidePanel));
  }
  function handleCustomText() {
    props.setShowCustomText(p => !p)
    localStorage.setItem("textSettingKey", JSON.stringify(!props.showCustomText));
  }
  function removeHistory() {
    localStorage.removeItem("searchHistoryKey");
    location.reload();
  }
  

  useEffect(()=>{
    localStorage.setItem("textKey", JSON.stringify(props.customText));
  }, [props.customText])

  useEffect(()=>{
    localStorage.setItem("backgroundColor", JSON.stringify(props.backgroundColor));
  }, [props.backgroundColor])

  useEffect(()=>{
    setIsShowingSetting(p =>!p)
  }, [showSetting])
  return (
    <>
      <button 
        className='settings--button'
        onClick={()=>setShowSetting(true)}
      >
        <SettingsIcon fontSize='medium'/>
      </button>
    
      <div 
        className={showSetting?'side-panel--closer':'side-panel--closer side-panel--closer-hiden'}
        onClick={()=>setShowSetting(false) }
      ></div>
      <div className={showSetting ? 'side-panel--container ' : 'side-panel--container side-panel--container-hiden'}>

        <h2>setting</h2>

        <div className='side-panel--item'>
          <p className='side-panel--lable'>show time</p>
          <FormControlLabel control={
            <Switch 
              checked={props.showTime}
              onChange={()=>handleTime()}
            />
          }/>
        </div>
        <Divider variant="middle"/>


        <div className='side-panel--item'>
          <p className='side-panel--lable'>show side panels</p>
          <FormControlLabel control={
            <Switch 
              className='switch'
              checked={props.showSidePanel}
              onChange={()=>handleSidePanel()}
            />
            }/>
        </div>
        <Divider variant="middle"/>

        <div className='side-panel--item'>
          <p className='side-panel--lable'>show contact Dev</p>
          <FormControlLabel control={
            <Switch  
              checked={props.showContactDev}
              onChange={()=>handleContactDev()}
            />
            }/>
        </div>
        <Divider variant="middle"/>

        <div className='side-panel--item'>
          <p className='side-panel--lable'>show custom text</p>
          <FormControlLabel control={
            <Switch
            checked={props.showCustomText}
            onChange={()=>handleCustomText()}
            />
            }/>
        </div>
        <textarea 
          name="textArea" 
          type='text'
          id="customTextArea" 
          placeholder="your custom text"
          className='custom-text--input'
          hidden={!props.showCustomText} 
          maxLength={40} 
          value={props.customText} 
          onChange={(e) => props.setCustomText(e.target.value)}
        ></textarea>
        
        <h2>Colors</h2>
        <div className='colors--container'>
          <button className='colors--button green-b'  onClick={()=> props.setBackgroundColor('g')}></button>
          <button className='colors--button blue-b'   onClick={()=> props.setBackgroundColor('b')}></button>
          <button className='colors--button purple-b' onClick={()=> props.setBackgroundColor('p')}></button>
          <button className='colors--button red-b'    onClick={()=> props.setBackgroundColor('r')}></button>
        </div>


        <div className='side-panel--item'>
          <p className='side-panel--lable'>remove history</p>
          <button className='delete--button' onClick={removeHistory}>
            <DeleteForeverIcon color='error'/>
          </button>
        </div>
        <div className='side-panel--item'> 
          <a className='creadit--link' href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Free SVG Backgrounds and Patterns by SVGBackgrounds.com</a>
        </div>
      </div>
    </>
  )
};

export default SidePanel;