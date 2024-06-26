import SettingsIcon from '@mui/icons-material/Settings';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { useState } from 'react';


function SidePanel(props) {
  
  function handleTime() {
    props.setShowTime(p => !p)
    console.log(props.showTime)
  }
  function handleContactDev() {
    props.setShowContactDev(p => !p)
    console.log(props.showContactDev)
  }
  function handleSidePanel() {
    props.setShowSidePanel(p => !p)
  }
  function handleCustumText() {
    props.setShowCustumText(p => !p)
  }

  return (
    <>
      <button className='settings--button'>
        <SettingsIcon fontSize='medium'/>
      </button>
      <div className='side-panel--screan'>
        <div className='side-panel--container'>


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
            <p className='side-panel--lable'>show custum text</p>
            <FormControlLabel control={
              <Switch
              checked={props.showCustumText}
              onChange={()=>handleCustumText()}
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
        </div>
      </div>
    </>
  )
};

export default SidePanel;