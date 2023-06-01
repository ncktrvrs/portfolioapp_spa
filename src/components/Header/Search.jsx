import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { filterProjectsBySearchValue } from "../../reducer/reducer";

export default function Search() {

  const [searchValue, setSearchValue] = useState('');
  const [, dispatch] = useContext(Context);

  function handlerOnChange(event) { 
    setSearchValue(event.target.value);
    dispatch(filterProjectsBySearchValue(event.target.value));
  }

  return (
    <div className="search-wrapper">
      <input className="search-input"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handlerOnChange} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-search"
        viewBox="0 0 24 24"
      >
        <defs></defs>
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
    </div>
  );
}
