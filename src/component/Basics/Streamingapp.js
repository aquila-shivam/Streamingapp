import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(uniqueList);
  const [searchValue ,setSearchValue]=useState("");

  const getSeachValue =(curElem)=>{
    const updatedSearch =Menu.filter((curElem)=>{
      return curElem.name===searchValue;
    });
    try {
      setMenuData(updatedSearch);
      
    } catch (error) {
      alert("wrong search");
    }
    
  };

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
     <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getSeachValue}
            >
            Search
          </button>
        </div>
      </div>
    
      <Navbar filterItem={filterItem} menuList={menuList} />
      
      <MenuCard menuData={menuData} />
      
    </>
  );
};

export default Resturant;
