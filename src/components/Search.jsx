import { useState } from "react";

function Search(props) {

  const [history,setHistory] = useState(["hi",'why',"die","five","night"])
  const [isfocus,setIsfocus] = useState(false)

  return (
    <>
    <form className="form" action="https://www.google.com/search?q=" method="get" autoComplete="off" >
      <input  name="q" type="search" placeholder="Search" className="input--filed" onBlur={() => setIsfocus(false)} onFocus={() => setIsfocus(true)} />
      {isfocus ? <div className="history--container">
        <div className="history">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi!
        </div>
        <div className="history">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, vitae!
        </div>
        <div className="history">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laborum!
        </div>
        <div className="history">
          Lorem ipsum dolor sit amet consectetur adipisicingamet consectetur adipisicingamet consectetur adipisicingamet consectetur adipisicing elit. Dolore, natus quas! Reprehenderit quae consectetur maiores.
        </div>
      </div>: null}
    </form>
    
    </>
  )
};

export default Search;