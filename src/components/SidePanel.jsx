import SettingsIcon from '@mui/icons-material/Settings';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { useEffect } from 'react';
import zIndex from '@mui/material/styles/zIndex';


function SidePanel(props) {
  
  const [showSetting, setShowSetting] = useState(true)
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
  

  useEffect(()=>{
    localStorage.setItem("textKey", JSON.stringify(props.customText));
  }, [props.customText])

  useEffect(()=>{
    // if (showSetting===true) {
    //   setTimeout( setIsShowingSetting(), 1700)
    // }
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
        
      </div>
    </>
  )
};

export default SidePanel;