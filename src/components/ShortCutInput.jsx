import { useEffect, useState } from "react";

function ShortCutInput(props) {

  const [isUploaded, setIsUploaded] = useState(false)
  const [buttonState, setButtonState] = useState("disabeld shortcut--button")

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [img, setImg] = useState("")



  function handleImgInp(e) {
    setIsUploaded(true);
    setImg(e.target.value)
  }

  function handleSubmit(params) {
    const newData = {
      "place": props.shortCutPlace,
      "name": name,
      "URL": url,
      "img": img
    }
    props.data.push(newData)
    console.log(props.data);


    setName("");
    setUrl("");
    setImg("");
    props.setShowShortCutInp(false);
  }
  
  useEffect(() => {
    if (url.length > 3 & name.length > 3) {
      setButtonState("enabled shortcut--button ");
    }else{
      setButtonState("disabeld shortcut--button")
    }
  }, [name]);
  useEffect(() => {
    if (url.length > 3 & name.length > 3) {
      setButtonState("enabled shortcut--button ");
    }else{
      setButtonState("disabeld shortcut--button")
    }
  }, [url]);

  return (
    <>
      <div className="shortcut--screen">
        <div className="shortcut--container">

          <p className="shortcut--lable" >Name</p>
          <input
            className="shortcut--inp" 
            type="text" 
            name="short-cut-name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />

          <p className="shortcut--lable" ><small>*</small>URL</p>
          <input 
            className="shortcut--inp" 
            type="url" 
            name="url"
            value={url}
            onChange={(e)=> setUrl(e.target.value)}
          />

          <p className="shortcut--lable" >IMG</p>
          <input 
            className="shortcut--inp-img" 
            type="file" 
            accept="image/png, image/jpeg" 
            name="img" 
            id="file-upload" 
            value={img}
            onChange={(e)=>handleImgInp(e)} 
          />
          <label className={isUploaded? "uploaded shortcut--inp-lable":"shortcut--inp-lable"} htmlFor="file-upload">
            {isUploaded? "loaded" : "Upload"}
          </label>
          <div className="shortcut-button--container">
            <button className="shortcut--button cancel" onClick={() => props.setShowShortCutInp(false)}>
              Cancel
            </button>
            <button 
              className={buttonState}
              onClick={handleSubmit}
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </>
  )
};
  
export default ShortCutInput;