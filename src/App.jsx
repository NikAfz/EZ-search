import { useEffect, useState } from 'react'
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
  const [showCustomText, setShowCustomText] = useState(true)

  const [customText, setCustomText] = useState(JSON.parse(localStorage.getItem("textKey")) || "you can change some stuff in the settings")

  const [backgroundColor, setBackgroundColor] = useState(JSON.parse(localStorage.getItem('backgroundColor')) || "p")
 



  useEffect(() => {
    const timeHistory = localStorage.getItem("timeSettingKey");
    const contactHistory = localStorage.getItem("contactSettingKey");
    const panelHistory = localStorage.getItem("panelSettingKey");
    const textHistory1 = localStorage.getItem("textSettingKey");

    if (timeHistory) {
      setShowTime(JSON.parse(timeHistory));
    }
    if (contactHistory) {
      setShowContactDev(JSON.parse(contactHistory));
    }
    if (panelHistory) {
      setShowSidePanel(JSON.parse(panelHistory));
    }
    if (textHistory1) {
      setShowCustomText(JSON.parse(textHistory1));
    }
  }, []);

  return (
    <>
      {showTime? <Time /> : null}
      {showContactDev? <Contact/> : null}
      <SearchBlockText 
        showSidePanel={showSidePanel} 
        showCustomText={showCustomText}
        customText={customText}
        backgroundColor={backgroundColor}
      />
      <SidePanel 
        showTime={showTime} setShowTime={setShowTime}
        showContactDev={showContactDev} setShowContactDev={setShowContactDev}
        showSidePanel={showSidePanel} setShowSidePanel={setShowSidePanel}
        showCustomText={showCustomText} setShowCustomText={setShowCustomText}
        customText={customText} setCustomText={setCustomText}
        backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}
      />
    </>
  )
}

export default App
