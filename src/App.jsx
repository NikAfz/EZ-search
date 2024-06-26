import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Time from './components/Time'
import Contact from './components/Contact'
import SearchBlockText from './components/SearchBlockText'
import SidePanel from './components/SidePanel'

function App() {
  const [showTime, setShowTime] = useState(true)
  const [showContactDev, setShowContactDev] = useState(true)
  const [showSidePanel, setShowSidePanel] = useState(true)
  const [showCustumText, setShowCustumText] = useState(true)
  return (
    <>
      {showTime? <Time /> : null}
      {showContactDev? <Contact/> : null}
      <SearchBlockText 
        showSidePanel={showSidePanel} 
        showCustumText={showCustumText}
      />
      <SidePanel 
        showTime={showTime} setShowTime={setShowTime}
        showContactDev={showContactDev} setShowContactDev={setShowContactDev}
        showSidePanel={showSidePanel} setShowSidePanel={setShowSidePanel}
        showCustumText={showCustumText} setShowCustumText={setShowCustumText}

      />
    </>
  )
}

export default App
