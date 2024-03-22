function Search(props) {
  return (
    <form class="form" action="https://www.google.com/search?q=" method="get" autoComplete="off" >
      <input  name="q" type="search" placeholder="Search" className="input--filed"/>
    </form>
  )
};

export default Search;