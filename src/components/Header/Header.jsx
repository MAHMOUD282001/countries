import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoSunny, IoSunnyOutline } from "react-icons/io5";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="py-5 shadow-sm light-bg dark:dark-bg">
      <div className="container flex items-center justify-between">
        <div>
          <h3 className="text-[14px] sm:text-xl font-bold">Where in The World</h3>
        </div>

        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ?<IoMoonOutline size={17}/> : <IoSunnyOutline size={17}/>}
          <p className="text-[12px] sm:text-sm font-bold">{darkMode ? "Dark Mode" : "Light Mode"}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
