import React from "react"
import './Navbar.css'

export const Navbar = ({ children }) => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center">
      {children}
    </nav>
  )
}