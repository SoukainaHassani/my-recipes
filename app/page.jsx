import React from 'react';
import { homepageText, homepage, bonap, createdBy } from './content';
import './styles.css'
import './font.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li><a href='/'>My Recipes</a></li>
        <li><a href='/recipes'>Recettes</a></li>
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
