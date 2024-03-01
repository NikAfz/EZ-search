import LeftBlock from "./LeftBlock";
import CenterBlock from "./CenterBlock";
import RightBlock from "./RightBlock";
function Blocks(props) {
  return (
    <>
      <div className="blocks">
        <LeftBlock/>
        <CenterBlock/>
        <RightBlock/>
      </div>
    </>
  )
};

export default Blocks;
