import React, { Component } from 'react'
import { Link } from 'react-router'
import FlashMessage from './FlashMessage'

export default class Header extends Component {
  render() {
    return (
      <header>
        <FlashMessage />
        <nav>
            <Link to={{ pathname: '/' }}>Babel Coder Wiki!</Link>
            <ul>
                <li>
                    <Link to={{ pathname: '/pages' }}>All pages</Link>
                </li>
                <li>
                    <a href='#'>About us</a>
                </li>
            </ul>
        </nav>
      </header>
    )
  }
}
