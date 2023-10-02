"use client";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState<boolean>(false);
  return active ? (
    <div>
      <div
        onClick={() => setActive(!active)}
        className="absolute top-[15px] right-[15px] z-50 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#ffffff"
            strokeLinecap="round"
            strokeWidth={2}
            d="M4 18h16M4 12h16M4 6h16"
          />
        </svg>
      </div>

      <div className="absolute top-0 right-0 border-l-2 border-solid border-white">
        <div className="flex flex-col mt-20 w-[25rem] h-screen gap-2 ">
          <Link href="/" className="ml-5">
            Launches
          </Link>
          <Link href="/events" className="ml-5">
            Events
          </Link>
          <Link href="/Agencies" className="ml-5">
            Agencies
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div
      onClick={() => setActive(!active)}
      className="absolute top-[15px] right-[15px] z-50 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#ffffff"
          strokeLinecap="round"
          strokeWidth={2}
          d="M4 18h16M4 12h16M4 6h16"
        />
      </svg>
    </div>
  );
};

export default Nav;
