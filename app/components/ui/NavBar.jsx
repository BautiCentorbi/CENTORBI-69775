"use client"
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MainLogo from "../icons/MainLogo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Productos",
      href: "/products",
    },
    {
      label: "Nosotros",
      href: "/about",
    },
  ]
  
  const pathname = usePathname()
  console.log(pathname)

  return (
    <nav className="w-full bg-black dark:bg-currentColor sticky top-0 flex justify-between items-center h-24 max-w-[1920px] px-80">
      <MainLogo className="text-ourpink-light dark:text-white w-40 h-16" />

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className={`${pathname === item.href ? 'rounded-sm border-ourpink-dark border-b-2 hover:border-0 hover:rounded-xl' : ''} px-4 py-2 text-black font-medium text-xl hover:text-white hover:bg-ourpink-light dark:text-white dark:hover:bg-ourpink-dark rounded-xl m-2 cursor-pointer duration-300 dark:hover:text-black hover:font-semibold`}>
            {item.label}
          </Link>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul className={nav ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-background-dark ease-in-out duration-500" : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"}>
        <Image
          src={"/images/MainLogo.png"}
          height={144}
          width={144}
          alt="Next Curs Main"
        />
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className={`${pathname === item.href ? 'bg-ourpink-light' : ''} p-4 border-b rounded-t-xl hover:bg-ourpink-dark duration-300 hover:text-black cursor-pointer border-gray-600`}>
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar