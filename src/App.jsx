import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Time from "./components/Time";
import Contact from "./components/Contact";
import SearchBlockText from "./components/SearchBlockText";
import SidePanel from "./components/SidePanel";
import ShortCutInput from "./components/ShortCutInput";

function App() {
  const [showTime, setShowTime] = useState(true);
  const [showContactDev, setShowContactDev] = useState(true);
  const [showSidePanel, setShowSidePanel] = useState(true);
  const [showCustomText, setShowCustomText] = useState(true);
  const [showShortCutInp, setShowShortCutInp] = useState(false);

  const [customText, setCustomText] = useState(
    JSON.parse(localStorage.getItem("textKey")) ||
      "you can change some stuff in the settings"
  );

  const [backgroundColor, setBackgroundColor] = useState(
    JSON.parse(localStorage.getItem("backgroundColor")) || "p"
  );

  const [shortCutPlace, setShortCutPlace] = useState("");

  let [data, setData] = useState([
    {
      id: 0,
      place: "m",
      name: "NIkAfz",
      URL: "https://nikafz.github.io/portfolio/",
      img: "",
    },
  ]);

  useEffect(() => {
    const shortCutHistory = localStorage.getItem("shortCutKey");
    const timeHistory = localStorage.getItem("timeSettingKey");
    const contactHistory = localStorage.getItem("contactSettingKey");
    const panelHistory = localStorage.getItem("panelSettingKey");
    const textHistory1 = localStorage.getItem("textSettingKey");

    if (shortCutHistory) {
      setData(JSON.parse(shortCutHistory));
    }
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
      {showShortCutInp ? (
        <ShortCutInput
          setShowShortCutInp={setShowShortCutInp}
          shortCutPlace={shortCutPlace}
          setData={setData}
          data={data}
        />
      ) : null}

      {showTime ? <Time /> : null}
      {showContactDev ? <Contact /> : null}

      <SearchBlockText
        showSidePanel={showSidePanel}
        showCustomText={showCustomText}
        customText={customText}
        backgroundColor={backgroundColor}
        setShortCutPlace={setShortCutPlace}
        setShowShortCutInp={setShowShortCutInp}
        data={data}
        setData={setData}
      />

      <SidePanel
        showTime={showTime}
        setShowTime={setShowTime}
        showContactDev={showContactDev}
        setShowContactDev={setShowContactDev}
        showSidePanel={showSidePanel}
        setShowSidePanel={setShowSidePanel}
        showCustomText={showCustomText}
        setShowCustomText={setShowCustomText}
        customText={customText}
        setCustomText={setCustomText}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
      />
    </>
  );
}

export default App;
