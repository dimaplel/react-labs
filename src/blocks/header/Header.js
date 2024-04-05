import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

export const Header = () => {
    return (
        <header className='header_container'>
            <ul className='header_ul'>
                <li className='header_li'>
                    <Link to="/about" className='header_link'>About Me</Link>
                </li>
                <li>
                    <Link to="/" className='header_link'>Blog</Link>
                </li>
            </ul>
        </header>
    )
}