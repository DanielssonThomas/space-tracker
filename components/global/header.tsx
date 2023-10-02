"use client";
import Nav from "./nav";
const Header = () => {
  return (
    <div>
      <header className="flex flex-col justify-center items-center h-[5rem] w-screen text-black dark:text-white">
        <h1>Space Tracker!</h1>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
