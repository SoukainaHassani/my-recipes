import React from 'react';
import Link from 'next/link';
import '../recettes.css'

export default function Recipes() {
  return (
    <div>
      <h1 className='title-recettes'>Qu'est-ce qu'on mange?</h1>
      <Link href="/one">Chocolate Brownie </Link>
      <Link href="/two">Chocolate Cake </Link>
      <Link href="/">Page d'accueil</Link>
      <footer className='footer'>
      <p>Crée par
        <a href="https://github.com/SoukainaHassani"
        target="_blank" rel="noopener noreferrer"> Soukaina
        </a>
        </p>
      </footer>
    </div>
  );
}
