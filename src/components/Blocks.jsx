import LeftBlock from "./LeftBlock";
import CenterBlock from "./CenterBlock";
import RightBlock from "./RightBlock";
import { useState } from "react";
function Blocks(props) {
  
  return (
    <>
      <div className={props.showBlocks? "blocks": "blocks invisible"}>
        <LeftBlock/>
        <CenterBlock/>
        <RightBlock/>
      </div>
    </>
  )
};

export default Blocks;
