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
  const [searchInput, setSearchInput] = useState("");

  const historyRes = history.map((res, index) => {
    return (
      <div className="history" key={index}>
        {res}
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
    window.open(`https://www.google.com/search?q=${searchInput}`);
    setSearchInput("");
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
          name="q"
          type="search"
          placeholder="Search"
          className="input--filed"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
        />
        {isFocus && (
          <div className="history--container">
            {historyRes}
          </div>
        )}
      </form>
    </>
  );
}

export default Search;
