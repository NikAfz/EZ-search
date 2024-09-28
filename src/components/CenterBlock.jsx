import ShortCut from "./ShortCut";

function CenterBlock(props) {
  function handleShortcutLoader(params) {
    props.setShortCutPlace("m");
    props.setShowShortCutInp(true);
  }

  const shortCutsm = props.data.filter((cut) => cut.place === "m");
  const mElement = shortCutsm.map((element, index) => {
    return (
      <ShortCut
        key={index}
        id={element.id}
        name={element.name}
        URL={element.URL}
        img={element.img}
        data={props.data}
        setData={props.setData}
      />
    );
  });
  return (
    <>
      <div className={`center-block--container ${props.backgroundColor} `}>
        {mElement}
        <button
          className="short-cut-add--button"
          onClick={handleShortcutLoader}
        >
          +
        </button>
      </div>
    </>
  );
}

export default CenterBlock;
