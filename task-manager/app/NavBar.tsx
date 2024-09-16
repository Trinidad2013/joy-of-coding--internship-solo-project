"use client";
import Link from "next/link";
import React from "react";
import { SiGoogletasks } from "react-icons/si";
import classnames from "classnames";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Tasks", href: "/Tasks" },
  ];
  const currentPathname = usePathname();
  return (
    <nav className="flex mb-5 space-x-8 border-b px-5 h-14 items-center">
      <Link href="/">
        <SiGoogletasks />
      </Link>
      <ul className="flex space-x-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classnames({
                "text-orange-900 font-bold": link.href === currentPathname,
                "text-orange-500": link.href !== currentPathname,
                "hover:text-orange-800 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
