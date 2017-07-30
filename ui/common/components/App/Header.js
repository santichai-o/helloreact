import React, { Component } from 'react'
import { Link } from 'react-router'
import FlashMessage from './FlashMessage'

export const Header = (props) => {
  
  const isActive = (patterns) => patterns.find((pattern) => props.pathname.match(pattern))

  return (
    <header>
      <FlashMessage />
      <nav>
          <Link to={{ pathname: '/' }}>Hello React</Link>
          <ul>
            <li className={ isActive([/^\/$/g]) ? 'active' : ''} >
                <Link to={{ pathname: '/' }}>Home</Link>
            </li>
            <li className={ isActive([/^\/pages/g, /^\/page\//g]) ? 'active' : ''}>
                <Link to={{ pathname: '/pages' }}>Pages</Link>
            </li>
            <li className={ isActive([/^\/aboutus/g]) ? 'active' : ''}>
                <Link to={{ pathname: '/aboutus' }}>About us</Link>
            </li>
          </ul>
      </nav>
    </header>
  )
  
}

export default Header