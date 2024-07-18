import ShortCut from './ShortCut';
function RightBlock(props) {

  function handleShortcutLoader(params) {
    props.setShortCutPlace('r');
    props.setShowShortCutInp(true);
  }
  const shortCutsR = props.data.filter(cut => cut.place === 'r');
  
  const rElement = shortCutsR.map((element, index)=>{
      return(
        <ShortCut
          key = {index}
          name = {element.name} 
          URL = {element.URL}
          img = {element.img || ""}
        />
      )
  })
  return (
    <>
      <div className={`side-block--container ${props.backgroundColor} `}>
        {rElement}
        <button 
          className="short-cut-add--button"
          onClick={handleShortcutLoader}
        >+</button>
      </div>
    </>
  )
};

export default RightBlock;
