'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { MenuIcon,X } from 'lucide-react'
import {useState} from 'react'
import Image from 'next/image'
import {navLinks,socialMedia} from '../constants/index'
import { usePathname } from 'next/navigation'
import * as motion from "motion/react-client"

const Navbar = () => {
  
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    return (
    <nav className="flex justify-between items-center h-full px-[10%] bg-white/40 shadow-md rounded-full mb-[5%]">
        {/* Desktop Navbar */}
        <div className='hidden sm:flex gap-4'>
            {navLinks.map((link) => (
                <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`text-lg font-semibold transition-colors duration-200 cursor-pointer ${
                        usePathname() === link.href ? 'bg-sky-500 text-white rounded-md px-1 py-0.5' : 'text-slate-700'
                    }`}
                >
                    {link.name}
                </Link>
            ))} 
        </div>

        {/* Logo */}
        
        <div className='xl:absolute xl:left-1/2 xl:-translate-x-1/2'>
            <Link href="/" className="flex items-baseline cursor-pointer">
            <span className="text-3xl sm:text-4xl font-extrabold font-mono">Kimhong</span>
            <span className="text-3xl text-sky-400">.</span>
            </Link>
        </div>
        
        {/* Mobile Navbar*/}
        
        <Button variant='outline' className='relative z-50 sm:hidden' onClick={toggleMenu}>
            {isOpen ? <X size={32} /> : <MenuIcon size={32} />}
        </Button>
        {isOpen && (
        <div className='absolute top-0 left-0 w-full h-[60vh] bg-sky-500 text-slate-700  flex flex-col 
                justify-center items-center gap-4 py-4 sm:hidden z-10 cursor-pointer'>
            {navLinks.map((link) => (
            <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-semibold transition-colors duration-200 cursor-pointer ${
                    usePathname() === link.href ? 'bg-white text-sky-500 rounded-md px-1 py-0.5' : 'text-slate-700'
                }`}
                onClick={toggleMenu} // Close menu on link click
            >
                {link.name}
            </Link>
            ))}
            <ul className='flex gap-4 mt-3'>
                {socialMedia.map((social) => (
                    <li key={social.title}>
                        <a  href={social.link} target="_blank" rel="noopener noreferrer" onClick={toggleMenu} // Close menu on link click
                        >
                            <Image src={social.icon} alt={social.title} width={24} height={24} />
                        </a>
                    </li>
                ))} 
            </ul>
        </div>
        )}

        {/* Social Media Links */}
        <ul className='hidden lg:flex gap-2'>
            {socialMedia.map((social) => (
                <li key={social.title} >
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                        <Image src={social.icon} alt={social.title} width={24} height={24} />
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar