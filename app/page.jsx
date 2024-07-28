"use client";

import React, { useState } from 'react';
import { homepageText, homepage, bonap, createdBy } from './content';
import './styles.css'
import './font.css'

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li><a href='/'>Home</a></li>
        <li className='dropdown'>
          <a href='#' onClick={toggleDropdown}>Recettes</a>
          {isDropdownOpen && (
            <ul className='dropdown-menu'>
              <li><a href='/patisseries'>Pâtisseries</a></li>
              <li><a href='/plats'>Plats</a></li>
              <li><a href='/fastfood'>Fastfood</a></li>
            </ul>
          )}
        </li>
        <li><a href='/about'>About</a></li>
      </ul>
    </nav>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className='large-title'>My Recipes</h1>
      <div className='text-homepage'>{homepageText}</div>
      <div className='hometext'>{homepage}</div>
      <div className='created-by' dangerouslySetInnerHTML={{__html: createdBy }} />
      <div className='bye'>{bonap}</div>
    </div>
  );
}
