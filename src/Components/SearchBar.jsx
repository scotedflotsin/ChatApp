import React from "react";
import search from "../assets/search.png";

const SearchBar = ({onQueryChange}) => {



  return (
    <>
      <div className="rounded-[10px] flex justify-start gap-[14px] px-[15px] py-[5px] items-center search-bar-shadow ">
        <img src={search} alt="search" className="w-[29px] h-[30px]" />
        <input
          onChange={(e)=>onQueryChange(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-[200px] text-[18px]  roboto-sub outline-none border-none"
        />
      </div>
    </>
  );
};

export default SearchBar;
