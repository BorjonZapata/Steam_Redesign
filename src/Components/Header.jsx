import DropDownBtn from "./DropDownBtn";
import LibraryFilters from "./LibraryFilters";
import React, { useState } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

    return (
      <header className="LibraryHeader">
        <button className="HeaderButton">Home</button>
        <button className="HeaderButton">Collections</button>
        <button className="HeaderButton">News and Updates</button>
        <input className="input1" type="text" placeholder="Search.."></input>
        <DropDownBtn BtnText="Filters" onClick={toggleVisibility} />
        <LibraryFilters isVisible={isVisible} />
        <button className="HeaderButton">Activate a Product</button>
        <button className="HeaderButton">Add a non-Steam Game</button>
      </header>
    );
  }
  export default Header;
  