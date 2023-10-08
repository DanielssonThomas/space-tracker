"use client";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);

  };

  const links = [
    {name:"Launches",
      path:"/"},
    {name:"Events",
      path:"/events"},
    {name:"Agencies",
      path:"/Agencies"},
  ]

  const grayShades = [
      {color: "bg-[#081525]/50",
          radius: "h-[10rem] w-[10rem] z-30",
            translate: "translate-x-0"},
      {color: "bg-[#030917]/50",
          radius: "h-[20rem] w-[20rem] z-20",
            translate: "translate-x-14 translate-y-6"},
      {color: "bg-[#000009]/50",
          radius: "h-[30rem] w-[30rem] z-10",
            translate: "translate-x-28 translate-y-9"},
  ];


  return(
      <div className="flex justify-end container bg-transparent absolute top-1 right-0 border-l-2 border-solid border-white">
          <svg onClick={toggleNavbar} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`z-50 fixed icon icon-tabler icon-tabler-menu-2 transition duration-500 cursor-pointer ${active? 'rotate-0' : 'rotate-90'}`}>
              <path d="M40 12L47.9196 32.0804L68 40L47.9196 47.9196L40 68L32.0804 47.9196L12 40L32.0804 32.0804L40 12Z" stroke="#C2CCDE" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        <ul className={`flex flex-col h-full w-full`}>
          {
            links.map((link,index) => (
                <li key={index} className={`flex flex-col justify-center rounded-bl-full pl-6 fixed top-0 pt-9 duration-500 ease-linear ${active ? 'right-0 top-0' : 'right-[-100%] top-[-100%]' } ${grayShades[index].color} ${grayShades[index].radius} text-zinc-300 text-xl font-bold font-['Inter'] overflow-hidden`}>
                    <Link href={link.path}><div className={`${grayShades[index].translate} flex justify-center border-b-2 origin-center rotate-45 border-transparent hover:border-white duration-1000 w-32 rounded-b-full text-2xl`}>{link.name}</div></Link>
                </li>
            ))
          }
        </ul>
      </div>
  )
}

export default Nav;
