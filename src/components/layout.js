import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <a href="mailto:srijon365@gmail.com">Email</a>
        {` • `}
        <a href="https://www.github.com/srijonsaha">GitHub</a>
        {` • `}
        <a href="https://www.linkedin.com/in/srijonsaha/">LinkedIn</a>
        {` • `}
        <a href="https://www.instagram.com/srijon_s">Instagram</a>
        {` • `}
        <a href="https://www.twitter.com/srijon_s">Twitter</a>
      </footer>
    </div>
  )
}

export default Layout
