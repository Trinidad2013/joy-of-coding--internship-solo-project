import Link from "next/link";
import React from "react";
import { SiGoogletasks } from "react-icons/si";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Task", href: "/task" },
  ];
  return (
    <nav className="flex mb-5 space-x-8 border-b px-5 h-14 items-center">
      <Link href="/">
        <SiGoogletasks />
      </Link>
      <ul className="flex space-x-8">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors "
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
