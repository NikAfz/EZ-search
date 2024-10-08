import ShortCut from "./ShortCut";

function LeftBlock(props) {
  function handleShortcutLoader(params) {
    props.setShortCutPlace("l");
    props.setShowShortCutInp(true);
  }

  const shortCutsl = props.data.filter((cut) => cut.place === "l");

  const lElement = shortCutsl.map((element, index) => {
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
      <div className={`side-block--container ${props.backgroundColor} `}>
        {lElement}
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

export default LeftBlock;
