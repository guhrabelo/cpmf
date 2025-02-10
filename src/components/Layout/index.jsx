import * as React from "react"

import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <> 
    Header
    <main>{children}</main>
    Footer
    </>
  )
}

export default Layout
