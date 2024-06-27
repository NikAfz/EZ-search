import { useState } from "react";
import Blocks from "./Blocks";
import CustomText from "./CustomText";
import Search from "./Search";
function SearchBlockText(props) {
  const [showBlocks, setShowBlocks] = useState(true);
  return (
    <>
      <div className="search-block-text--container ">
        {props.showCustomText? <CustomText customText={props.customText}/> : null}
        <Search 
          setShowBlocks={setShowBlocks}
        />
        <Blocks 
          showBlocks={showBlocks}
          showSidePanel={props.showSidePanel}
        />
      </div>
    </>
  )
};

export default SearchBlockText;