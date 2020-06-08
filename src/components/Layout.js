import React from "react"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"

export default function Layout({ children }) {
  return [
    <div>
      <Header />
         { children }
      <Footer />
    </div>
  ]
}

  
