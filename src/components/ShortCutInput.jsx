function ShortCutInput(props) {
  return (
    <>
      <div className="shortcut--screen">
        <div className="shortcut--container">

          <p className="shortcut--lable" >Name</p>
          <input className="shortcut--inp" type="text" name="short-cut-name"/>

          <p className="shortcut--lable" >URL</p>
          <input className="shortcut--inp" type="url" name="url"/>

          <p className="shortcut--lable" >IMG</p>
          <input onChange={()=>console.log("hi")} className="shortcut--inp-img" type="file" accept="image/png, image/jpeg" name="" id="file-upload" />
          <label className="shortcut--inp-lable" htmlFor="file-upload">
            Upload
          </label>
          <div className="shortcut-button--container">
            <button className="shortcut--button cancel">
              Cancel
            </button>
            <button className="shortcut--button done">
              Done
            </button>
          </div>
        </div>

      </div>
    </>
  )
};
  
export default ShortCutInput;