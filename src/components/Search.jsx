import { useState, useEffect } from "react";

function Search(props) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistoryKey");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  const [isFocus, setIsFocus] = useState(false);
  const [mouseFocus, setMouseFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const historyRes = history.map((res, index) => {
    return (
      <div className="history" key={index} 
      onClick={()=> {window.open(`https://www.google.com/search?q=${res}`, "_self");}}>
        {res}
        {/* <button className="history-remove--button" onClick={() => Remove(index)}> &#10008; </button> */}
      </div>
    );
  });
  function handleSubmit(e) {
    e.preventDefault();
    setHistory((prev) => {
      const updatedHistory = [...prev, searchInput];
      if (updatedHistory.length > 6) {
        updatedHistory.shift();
      }
      localStorage.setItem("searchHistoryKey", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
    window.open(`https://www.google.com/search?q=${searchInput}`, "_self");
    setSearchInput("");
  }

  function BlurFocus(params) {
    if (mouseFocus) {
      return;
      
    }else{setIsFocus(false);}
    
  }

  if (isFocus === true && history.length > 0) {
    props.setShowBlocks(false)
  }
  if (isFocus === false) {
    props.setShowBlocks(true)
  }
  return (
    <>
      <form
        className="form"
        action="https://www.google.com/search?q="
        method="get"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <input
          id="input--filed"
          name="q"
          type="search"
          placeholder="Search"
          className="input--filed"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onBlur={()=>BlurFocus()}
          
          onFocus={() => setIsFocus(true)}
        />
        {isFocus&& history.length > 0 && (
          <div className="history--container"
          onMouseEnter={()=> setMouseFocus(true)}
          onMouseLeave={()=> setMouseFocus(false)}
          > 
            {historyRes}
          </div>
        )}
      </form>
    </>
  );
}

export default Search;
