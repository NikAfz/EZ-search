import { useState } from "react";
import Blocks from "./Blocks";
import CustomText from "./CustomText";
import Search from "./Search";
function SearchBlockText(props) {
  const [showBlocks, setShowBlocks] = useState(true);
  return (
    <>
      <div className="search-block-text--container ">
        <CustomText/>
        <Search setShowBlocks={setShowBlocks}/>
        <Blocks showBlocks={showBlocks}/>
      </div>
    </>
  )
};

export default SearchBlockText;