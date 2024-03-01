import Blocks from "./Blocks";
import CustomText from "./CustomText";
import Search from "./Search";

function SearchBlockText(props) {
  return (
    <>
      <div className="search-block-text--container">
        <CustomText/>
        <Search/>
        <Blocks/>
      </div>
    </>
  )
};

export default SearchBlockText;