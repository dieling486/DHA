import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 120)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={isVisible ? 'header-visible' : 'header-hidden'}>
      <nav>
        <Link to="/" className="logo">普脂康</Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              首页
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              关于公司
            </Link>
          </li>
          <li>
            <Link to="/business" className={location.pathname === '/business' ? 'active' : ''}>
              主营业务
            </Link>
          </li>
          <li>
            <Link to="/applications" className={location.pathname === '/applications' ? 'active' : ''}>
              应用场景
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
