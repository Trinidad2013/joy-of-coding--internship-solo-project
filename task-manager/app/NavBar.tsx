"use client";
import Link from "next/link";
import React from "react";
import { SiGoogletasks } from "react-icons/si";
import classnames from "classnames";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Tasks", href: "/task" },
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
                "text-zinc-900": link.href === currentPathname,
                "text-zinc-500": link.href !== currentPathname,
                "hover:text-zinc-800 transition-colors": true,
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
