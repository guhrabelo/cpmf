import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/contato" activeStyle={{ color: "red" }}>Contato</Link> |
      <Link to="/sobre" activeStyle={{ color: "red" }}>Sobre</Link>  
    </nav>
  )
}

export default Menu