import { useState } from "react";
import Blocks from "./Blocks";
import CustomText from "./CustomText";
import Search from "./Search";
import { useEffect } from "react";

function SearchBlockText(props) {
  const [showBlocks, setShowBlocks] = useState(true);
  const [backgroundColor,setBackgroundColor] = useState('')

  // if (props.backgroundColor === 'p') {
  //   setBackgroundColor("purple-back");
  //   console.log(backgroundColor);
  // }
  // else if(props.backgroundColor === 'g'){
  //   setBackgroundColor("green-back")
  // }
  // else if(props.backgroundColor === 'r'){
  //   setBackgroundColor("red-back")
  // }
  // else if(props.backgroundColor === 'b'){
  //   setBackgroundColor("blue-back")
  // }


  useEffect(() => {
    if (props.backgroundColor === 'p') {
      setBackgroundColor('search-block-text--container purple-back');
    }
    else if(props.backgroundColor === 'g'){
      setBackgroundColor("search-block-text--container green-back")
    }
    else if(props.backgroundColor === 'r'){
      setBackgroundColor("search-block-text--container red-back")
    }
    else if(props.backgroundColor === 'b'){
      setBackgroundColor("search-block-text--container blue-back")
    }
  }, [props.backgroundColor]);

  return (
    <>
      <div className={backgroundColor}>
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