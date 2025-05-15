'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-indigo-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-indigo-200 transition">
            🎬 MovieReviews
          </Link>

          {/* Nav Links */}
          <div className="flex space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-indigo-200 transition">Home</Link>
            <Link href="/movies" className="hover:text-indigo-200 transition">Movies</Link>
            <Link href="/about" className="hover:text-indigo-200 transition">About</Link>
            <Link href="/contact" className="hover:text-indigo-200 transition">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
