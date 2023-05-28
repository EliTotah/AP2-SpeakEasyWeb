import './SearchBox.css'
import { useRef } from 'react';


function SearchBox({doSearch}) {

    const search = useRef(null);

    const searchFun = function () {
        doSearch(search.current.value);
}
    return (
      <div className="search-container">
        <div className="input">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input ref={search} onKeyUp={searchFun} type="text" placeholder="Search or start new chat"/>
        </div>
        <i className="bi bi-search"></i>
      </div>    
    );
  }
  
  export default SearchBox;
  