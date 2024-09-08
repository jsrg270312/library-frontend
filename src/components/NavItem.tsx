'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props {
  path: string;
  text: string;
}

const NavItem = ( {path, text}: Props) => {
  const currentPath = usePathname();
  const isActive = (currentPath === path) ? 'bg-slate-600' : '' 
  return (
    <Link
        href={path}
    >
      <li className={`p-2 hover:bg-slate-600 rounded-lg ${isActive}`}>
          <span>{text}</span>
      </li>
    </Link>
  )
}

export default NavItem
