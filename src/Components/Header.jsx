import DropDownBtn from "./DropDownBtn";
import LibraryFilters from "./LibraryFilters";
import React, { useState } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

    return (
      <header>
        <button>Home</button>
        <button>Collections</button>
        <button>News and Updates</button>
        <input type="text" placeholder="Search.."></input>
        <DropDownBtn BtnText="Filters" onClick={toggleVisibility} />
        <LibraryFilters isVisible={isVisible} />
        <button>Activate a Product</button>
        <button>Add a non-Steam Game</button>
      </header>
    );
  }
  export default Header;
  