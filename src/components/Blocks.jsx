import LeftBlock from "./LeftBlock";
import CenterBlock from "./CenterBlock";
import RightBlock from "./RightBlock";
import { useState } from "react";
function Blocks(props) {
  
  return (
    <>
      <div className={props.showBlocks? "blocks": "blocks invisible"}>
        {props.showSidePanel? <LeftBlock/> : null}
        <CenterBlock/>
        {props.showSidePanel? <RightBlock/> : null}
      </div>
    </>
  )
};

export default Blocks;
