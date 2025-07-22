//'use client'
//
//import Link from 'next/link'
//import { usePathname } from 'next/navigation'
//
//export default function Header() {
//  const pathname = usePathname()
//
//  const isActive = (href: string) =>
//    pathname === href ? 'text-black font-semibold dark:text-white' : 'text-gray-700'
//
//  return (
//    <header className="bg-white shadow p-4">
//      <div className="max-w-4xl mx-auto flex flex-row items-center justify-between">
//        <div className="text-center leading-tight mb-2">
//          <h1 className="text-2xl font-bold">Mental Health</h1>
//          <h2 className="text-xl font-medium">Tracker</h2>
//        </div>
//        <nav className="mt-2 flex space-x-4">
//          <Link href="/" className={isActive('/')}>
//            Home
//          </Link>
//          <Link href="/chat" className={isActive('/chat')}>
//            Chat
//          </Link>
//          <Link href="/dashboard" className={isActive('/dashboard')}>
//            Dashboard
//          </Link>
//        </nav>
//      </div>
//    </header>
//  )
//}
//






"use client";
import Link from "next/link";
import { useState } from "react";
import { ThemeSwitch } from "./theme-switch";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white dark:bg-neutral-900 shadow sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-10 relative">
        <div className="text-xl font-bold tracking-tight flex flex-col justify-centre items-center">
            <Link href="/">Mental Health</Link>
            <Link href="/">Tracker</Link>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-base font-medium">
          <li className="pt-1.5"><Link href="/chat">Chat</Link></li>
          <li className="pt-1.5"><Link href="/dashboard">Dashboard</Link></li>
          <li><ThemeSwitch /></li>
        </ul>
        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <ul className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg flex flex-col py-2 z-50 md:hidden animate-fade-in">
            <li><Link href="/chat" className="block px-6 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Chat</Link></li>
            <li><Link href="/dashboard" className="block px-6 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
            <li className="pl-6"><ThemeSwitch /></li>
          </ul>
        )}
      </nav>
    </header>
  );
} 