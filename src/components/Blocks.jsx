import LeftBlock from "./LeftBlock";
import CenterBlock from "./CenterBlock";
import RightBlock from "./RightBlock";
import { useEffect, useState } from "react";

function Blocks(props) {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    if (props.backgroundColor === "p") {
      setBackgroundColor("block block--p");
    } else if (props.backgroundColor === "g") {
      setBackgroundColor("block block--g");
    } else if (props.backgroundColor === "r") {
      setBackgroundColor("block block--r");
    } else if (props.backgroundColor === "b") {
      setBackgroundColor("block block--b");
    }
  }, [props.backgroundColor]);

  return (
    <>
      <div className={props.showBlocks ? "blocks" : "blocks invisible"}>
        {props.showSidePanel ? (
          <LeftBlock
            backgroundColor={backgroundColor}
            setShortCutPlace={props.setShortCutPlace}
            setShowShortCutInp={props.setShowShortCutInp}
            data={props.data}
            setData={props.setData}
          />
        ) : null}

        <CenterBlock
          backgroundColor={backgroundColor}
          setShortCutPlace={props.setShortCutPlace}
          setShowShortCutInp={props.setShowShortCutInp}
          data={props.data}
          setData={props.setData}
        />

        {props.showSidePanel ? (
          <RightBlock
            backgroundColor={backgroundColor}
            setShortCutPlace={props.setShortCutPlace}
            setShowShortCutInp={props.setShowShortCutInp}
            data={props.data}
            setData={props.setData}
          />
        ) : null}
      </div>
    </>
  );
}

export default Blocks;
